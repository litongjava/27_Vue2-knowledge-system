import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./assets/css/common.css"
import "./assets/font/iconfont.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
