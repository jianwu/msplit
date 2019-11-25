<template>
  <div class="msp-parent" v-on-resize:600='onWindowResize'>
    <div class="msp-container" :class="{'msp-container-v': vertical}" 
        @mousemove="resizing" @mouseup="stopResize" @touchmove="resizing" @touchend="stopResize">
      <template v-for="(p, i) in paneSet.panes">
        <div :key="'msp_' + i">
          <!-- <div class="msp-pane" :style="paneStyle(i)" v-if="visible(i)"> -->
          <div class="msp-pane" :style="paneStyle(i)">
            <slot :name="p.name" />
          </div>
          <div v-if="i<paneSet.panes.length-1" class="msp-handle" :style="handleStyle(i)"
              @mousedown.prevent="startResize(i, $event)"
              @touchstart.prevent="startResize(i, $event)"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';
import PaneSet, { Pane, PaneStatus } from './PaneSet';
import { OnResizeDirective } from './OnResize';
import { TouchEvent } from './TouchEvent';

@Component({
  name: 'msplit',
  directives: {
    'on-resize': OnResizeDirective.instance,
  },
})
export default class MSplit extends Vue {
  @Prop({default: false}) private vertical!: boolean;
  @Prop({default: ''}) private maxPane!: string;
  private count = 0;
  private startPos = -1;
  private startHandlePos = -1;
  private paneSet = new PaneSet();
  private vnodes = new Array<Vue.VNode>();
  private resizeIndex = -1;
  private show: boolean[][] = [];

  private getPos(e: MouseEvent | TouchEvent): number {
    const pos = (e instanceof MouseEvent) ? e : e.touches.item(0);
    return this.vertical ? pos.clientY : pos.clientX;
  }

  private startResize(i: number, e: MouseEvent | TouchEvent): void {
    if (this.paneSet.maxPane)
      return;
    this.resizeIndex = i;
    this.startPos = this.getPos(e);
    this.startHandlePos = this.paneSet.getHandlePos(i);
  }

  private resizing(e: MouseEvent | TouchEvent): void {
    if (this.resizeIndex < 0)
      return;
    const newPos = this.getPos(e);
    this.paneSet.moveHandle(this.resizeIndex, this.startHandlePos + newPos - this.startPos);
    e.stopPropagation();
  }

  private stopResize(): void {
    this.resizeIndex = -1;
  }

  private onWindowResize() {
    if (!this.$el)
      return;
    this.$emit('resize');
    this.paneSet.totalSize = this.vertical ? this.$el.clientHeight : this.$el.clientWidth;
    this.paneSet.calculateSize();
  }

  get paneStyle() {
    return (i: number) => ({
      [this.vertical ? 'height' : 'width']: `${this.paneSet.panes[i].getDisplaySize()}px`,
    });
  }

  get handleStyle() {
    return (i: number) => ({
      [this.vertical ? 'top' : 'left']: `${this.paneSet.getHandlePos(i)}px`,
      [this.vertical ? 'height' : 'width']: '5px',
      cursor: this.vertical ? 'row-resize' : 'col-resize',
    });
  }

  get visible() {
    return (i: number) => this.paneSet.panes[i].visible();
  }

  @Watch('maxPane')
  maxPaneUpdated() {
    this.paneSet.setMaxPane(this.maxPane);
    this.paneSet.calculateSize();
  }

  @Watch('show', {immediate: true, deep: true})
  showUpdated() {
    if (this.show.length < this.paneSet.panes.length)
      return;
    for (let i = 0; i < this.paneSet.panes.length; i++)
      this.paneSet.panes[i].setStatus(this.show[i][0] ? PaneStatus.NORMAL : PaneStatus.MIINIMIZED);
    this.paneSet.calculateSize();
  }

  mounted() {
    let i = 0;
    for (const skey in this.$slots) {
      if (!this.$slots.hasOwnProperty(skey))
        continue;
      const vnode = this.$slots[skey]![0];
      if (vnode) {
        const { attrs, slot } = vnode!.data!;
        if (attrs) {
          let show = attrs.show;
          if (show === undefined)
            show = [true];
          else if (!Array.isArray(show))
            throw new Error(`show attribute for pane has to be array: show=${attrs.show}, paneName=${skey}`);

          this.$set(this.show, i++, show);
          this.paneSet.addPane(new Pane(slot!, parseInt(attrs.size), parseInt(attrs.min), parseInt(attrs.max), parseInt(attrs.grow)));
        }
      }
    }
    this.paneSet.totalSize = this.vertical ? this.$el.clientHeight : this.$el.clientWidth;
    this.paneSet.calculateSize();
  }
}
</script>

<style scoped>
.msp-parent {
  width:100%;
  border: 1px solid rgba(154, 152, 179, 0.242);
  background-color: rgba(192, 163, 163, 0.05);
  height: 100%;
  display: block;
  /* position: fixed; */
}

.msp-container {
  position: relative;
  height: 100%;
  display: flex;
  border: 1px solid grey;
  float: left;
  overflow: hidden;
}

.msp-container-v {
  width: 100%;
  flex-direction: column;
  float: top;
}

.msp-pane {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  display: flex;
  /* overflow: auto; */
}

.msp-handle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  border-left: 1px solid grey;
  border-top: 1px solid grey;
  z-index: 10;
  /* touch-action: none; */
}
</style>

