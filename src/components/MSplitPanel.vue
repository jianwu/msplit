<template>
  <div class="msp-parent" v-on-resize:600='onWindowResize'>
    <div class="msp-container" @mousemove="resizing" @mouseup="stopResize">
      <template v-for="(p, i) in paneSet.panes">
        <div :key="'msp_' + i">
          <div class="msp-panel" :style="panelStyle(i)" >
            <!-- <pre>attrs: {{attrs(p.name)}}</pre> -->
            <!-- {{p.getDisplaySize()}}<br>
            {{p.grow}}<br> -->
            <slot :name="p.name" />
          </div>
          <div v-if="i<paneSet.panes.length-1" class="msp-handle" :style="handleStyle(i)" @mousedown.prevent="startResize(i, $event)"/>
        </div>
      </template>
    </div>
    <!-- {{$slots['p1'][0].data.attrs}}<br>
    {{slots['p1'][0].data.attrs}}<br>
    {{$slots === slots}}<br>
    show: {{show}} <br> -->

  </div>
</template>

<script lang="ts">
import 'vue-resize/dist/vue-resize.css';
import _ from 'lodash';
import PaneSet, { Pane, PaneStatus } from './PaneSet';
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';

@Component
export default class MSplitPanel extends Vue {
  private startPos = -1;
  private startHandlePos = -1;
  private paneSet = new PaneSet();
  private vnodes = new Array<Vue.VNode>();
  private resizeIndex = -1;
  private show: boolean[][] = [];

  private startResize(i: number, e: MouseEvent): void {
    this.resizeIndex = i;
    // this.vnodes[i].context.$emit("update:test", 2)
    // emit(this.vnodes[i], 'update:test', 2);
    this.startPos = e.clientX;
    this.startHandlePos = this.paneSet.getHandlePos(i);
    console.log(`startResize: resizingIndex=${this.resizeIndex}, startPos=${this.startPos}, startHandlePos=${this.startHandlePos}`);
  }

  private resizing(e: MouseEvent): void {
    if (this.resizeIndex < 0)
      return;
    // _.debounce(() => {
    /* eslint-disable no-mixed-operators */
    console.log(`Moving: clientX=${e.clientX}`);
    this.paneSet.moveHandle(this.resizeIndex, this.startHandlePos + e.clientX - this.startPos);
    console.log(`getDisplaySize=${this.paneSet.panes[2].getDisplaySize()}px`);
    // }, 100)();
    this.$forceUpdate();
  }

  private stopResize(): void {
    this.resizeIndex = -1;
  }

  private onWindowResize() {
    if (!this.$el)
      return;
    console.log(`resized:width=${this.$el.clientWidth}`);
    this.$emit('resize');
    // TODO: fix debounce, this is not the righ way
    _.debounce(() => {
      this.paneSet.totalSize = this.$el.clientWidth;
      this.paneSet.calculateSize();
      console.log(`paneSet:${this.paneSet}`);
    }, 100)();
  }

  get panelStyle() {
    return (i: number) => ({ width: `${this.paneSet.panes[i].getDisplaySize()}px` });
  }

  get handleStyle() {
    return (i: number) => ({
      width: '5px',
      height: '100%',
      top: '0',
      left: `${this.paneSet.getHandlePos(i)}px`,
      'border-left': '1px solid grey',
      cursor: 'col-resize',
      'z-index': 10,
    });
  }

  get attrs() {
    return (name: string) => this.$slots[name]![0]!.data!.attrs!;
  }

  // Every time slots attribute changes, the whole object of $slots is assigned to a different
  // object, so we can't watch an sub-attribute of $slots directly, we have to use computed attributes
  // to get the updated slots attributes
  get slots() {
    return this.$slots;
  }

  @Watch('show', {immediate: true, deep: true})
  showUpdated() {
    console.log('showUpdated');
    for (let i = 0; i < this.paneSet.panes.length; i++)
      this.paneSet.panes[i].setStatus(this.show[i][0] ? PaneStatus.NORMAL : PaneStatus.MIINIMIZED);
    this.paneSet.calculateSize();
  }

  mounted(): this {
    let i = 0;
    for (const skey in this.$slots) {
      if (!this.$slots.hasOwnProperty(skey))
        continue;
      const vnode = this.$slots[skey]![0];
      if (vnode) {
        const { attrs, slot } = vnode!.data!;
        if (attrs) {
          this.$set(this.show, i++, attrs.show);
          this.paneSet.addPane(new Pane(slot!, parseInt(attrs.size), parseInt(attrs.min), parseInt(attrs.max), parseInt(attrs.grow), attrs));
        }
      }
    }
    this.paneSet.totalSize = this.$el.clientWidth;

    // this.$watch('$slots',
    //  () => { console.log('slots changes'); },
    //  { deep: true, immediate: true });
    return this;
  }
  unmount(): this {
    return this;
  }
}
</script>

<style scoped>
.msp-parent {
  width:100%;
  border: 1px solid red;
  background-color: rgba(255, 0, 0, 0.315);
  height: 100%;
  display: block;
  /* position: fixed; */
}
.msp-container {
  position: relative;
  /* box-sizing: border-box; */
  /* border-collapse: collapse; */
  /* width: 100%; */
  height: 100%;
  display: flex;
  border: 1px solid grey;
  float: left;
  overflow: hidden;
}
.msp-panel {
  box-sizing: border-box;
  border-collapse: collapse;
  display: flex;
  overflow: auto;
  height: 100%;
}
.msp-handle {
  position: absolute;
}
</style>

