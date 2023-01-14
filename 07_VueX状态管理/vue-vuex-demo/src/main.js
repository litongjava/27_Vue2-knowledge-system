import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from "./store"

Vue.config.productionTip = false

// 创建全局对象

Vue.prototype.$Hello = "Hello World!";


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
