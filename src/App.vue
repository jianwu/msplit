<template>
  <div id="app">
    <MSplitPanelTest></MSplitPanelTest>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MSplitPanelTest from './components/MSplitPanelTest.vue';

@Component({
  components: {
    MSplitPanelTest,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
