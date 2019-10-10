import Vue from 'Vue';
import MSplit from './components/MSplit.vue';
import OnResize, { OnResizeDirective } from './components/OnResize';

export default {
  install(vue: typeof Vue) {
    // debugger;
    // console.log('install OnResize');
    // vue.use(OnResize);
    // vue.directive('on-resize', OnResizeDirective.instance);
    console.log('install msplit');
    vue.component('msplit', MSplit);
  },
};

export { MSplit };
