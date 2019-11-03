<template>
  <div>
    <h4 align="center">MSplit Demo</h4>

    <p align="center">
      A resizable multi-pane vue component implemented with typescript.<br>
      <a href="https://github.com/jianwu/msplit">Github</a> •
      <a href="https://www.npmjs.com/package/msplit">Npmjs</a> •
    </p>
    <div>
      <b-button-group class="mx-1">
        Pane Visibility:
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s1[0]'>p1</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s2[0]'>p2</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s3[0]'>p3</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s31[0]'>p31</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s32[0]'>p32</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s4[0]'>p4</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s41[0]'>p41</b-btn>
        <b-btn size='sm' variant='outline-secondary' :pressed.sync='s42[0]'>p42</b-btn>
        Maximize Pane:<b-form-select v-model='maxPane' :options='["", "p1", "p2", "p3", "p31", "p32", "p33", "p4", "p41", "p42"]' />
      </b-button-group>
    </div>
    <div class="parent">
    <msplit :maxPane='maxPane'>
      <div slot="p1" :size=300  :min=250  :max=500 :show='s1'>Pane1<br>size=300<br>min=250<br>max=500 </div>
      <div slot="p2" :grow='10' :show='s2'> Pane2</div>
      <msplit :vertical='true' slot="p3" :grow='20' :show='s3' :maxPane='maxPane'>
        <div slot="p31" :show='s31'> Pane31 </div>
        <div slot="p32" :show='s32'> Pane32 </div>
        <div slot="p33">Pane33 </div>
      </msplit>
      <msplit slot="p4" :size='200' :show='s4' :maxPane='maxPane'>
        <div slot="p41" :show='s41' :grow=2 class="p41"> Pane41 Pane41  Pane41  Pane41  Pane41  Pane41  Pane41  Pane41  Pane41  Pane41  </div>
        <div slot="p42" :show='s42' :grow=1> Pane42 </div>
      </msplit>
    </msplit>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import { PaneStatus } from '../components/PaneSet';
import msplit from '../lib';

Vue.use(msplit);

@Component
export default class MSplitTest extends Vue {
  private s1 = [true];
  private s2 = [true];
  private s3 = [true];
  private s31 = [true];
  private s32 = [true];
  private s4 = [true];
  private s41 = [true];
  private s42 = [true];
  private maxPane = '';
}
</script>

<style scoped>
.parent {
  width:95%;
  height: 500px;
  background-color:rgba(0, 128, 0, 0.1);
  align-self: center;
}
.p41 {
  white-space: nowrap;
  overflow: scroll;
}
</style>

