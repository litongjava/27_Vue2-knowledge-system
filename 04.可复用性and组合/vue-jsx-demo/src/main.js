import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Toast from "./plugins/toast"
import "./plugins/toast/index.css"

Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
