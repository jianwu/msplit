<template>
  <div>
    <div>
      <b-button-group class="mx-1" style="">
        <b-btn size='sm' variant='outline-secondary' :pressed="true" >btn</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s1[0]'>p1</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s2[0]'>p2</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s3[0]'>p2</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s4[0]'>p4</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s41[0]'>p41</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s42[0]'>p42</b-btn>
      </b-button-group>
      <input type="checkbox" v-model="s1[0]">
      <input type="checkbox" v-model="s2[0]">
      <input type="checkbox" v-model="s3[0]">
      <input type="checkbox" v-model="s4[0]">
      {{s1}} {{s2}} {{s3}} {{s4}}
    </div>
    <div class="parent">
    <MSplitPanel ref="mpanel">
      <div slot="p1" :size=300  :min=250  :max=500 :show='s1'> Panel1 </div>
      <div slot="p2" :grow='10' :show='s2'> Panel2</div>
      <div slot="p3" :grow='20' :show='s3'> Panel3 </div>
      <MSplitPanel slot="p4" :size='200' :show='s4'>
        <div slot="p41" :show='s41'> Panel41 </div>
        <div slot="p42" :show='s42'> Panel42 </div>
      </MSplitPanel>
    </MSplitPanel>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import MSplitPanel from '../components/MSplitPanel.vue';
import { PaneStatus } from '../components/PaneSet';

@Component({
  components: {
    MSplitPanel,
  },
})
export default class MSplitPanelTest extends Vue {
  @Prop() private id?: string;
  private s1 = [true];
  private s2 = [true];
  private s3 = [true];
  private s4 = [true];
  private s41 = [true];
  private s42 = [true];
}
</script>

<style scoped>
.parent {
  width:95%;
  height: 500px;
  background-color:rgba(0, 128, 0, 0.1);
  align-self: center;
}
</style>

