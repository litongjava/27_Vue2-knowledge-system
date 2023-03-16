import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  mounted() {
    window.vue=this;
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
