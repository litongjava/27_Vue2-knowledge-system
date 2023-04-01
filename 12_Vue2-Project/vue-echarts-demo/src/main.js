import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '../node_modules/echarts/map/js/china'
import '../node_modules/echarts/map/js/world'
import Echarts from "./plugins/echarts"

Vue.use(Echarts);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
