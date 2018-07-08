import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';


Vue.use(ElementUI);
Vue.config.productionTip = false;

// Filters
Vue.filter('currency', value => `DKK ${parseFloat(value / 100).toFixed(2)}`);

new Vue({
  render: h => h(App),
}).$mount('#app');
