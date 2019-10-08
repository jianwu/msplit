import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import ResizeNotifier from './components/ResizeNotifier';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(ResizeNotifier);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
