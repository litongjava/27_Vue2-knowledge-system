import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Toast from "./plugins/toast"
import "./plugins/toast/toast.css"
import "./filters"

Vue.use(Toast)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
