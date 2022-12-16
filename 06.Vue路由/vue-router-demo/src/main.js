import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "./router";

Vue.config.productionTip = false;

//3.挂载路由对象
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
