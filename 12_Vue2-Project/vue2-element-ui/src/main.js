import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

//引入 element-ui
import ElementUI from 'element-ui'
//引入 element-ui 的 css 文件
import 'element-ui/lib/theme-chalk/index.css';//声明使用 element-ui
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
