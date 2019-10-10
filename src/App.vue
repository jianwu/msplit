<template>
  <div id="app">
    <MSplitTest></MSplitTest>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MSplitTest from './components/MSplitTest.vue';

@Component({
  components: {
    MSplitTest,
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
