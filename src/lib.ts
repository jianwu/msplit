import Vue from 'vue';
import MSplit from './components/MSplit.vue';

export default {
  install(vue: typeof Vue) {
    vue.component('msplit', MSplit);
  },
};

export { MSplit };
