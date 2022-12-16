import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import mainMixin from "./mixins"
import "./directives"

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      vision: "v.1.0.1"
    }
  },
  mounted() {
    // console.log("组件渲染了");
  }
})

Vue.use(mainMixin)




new Vue({
  render: h => h(App),
}).$mount('#app')
