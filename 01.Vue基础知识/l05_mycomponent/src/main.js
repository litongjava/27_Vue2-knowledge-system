import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false


// 创建一个Vue实例对象
// Vue是一个MVVM模型  React:V视图处理

/**
 * MVC
 *  M:Model
 *  V:View
 *  C:Control
 * MVVM
 *  M:Model
 *  V:View
 *  VM:ViewModel
 */

/**
 * ES5类的概念：
 * function Vue(){
 * 
 * }
 * Vue.prototype.ref = function(){}
 */
new Vue({
  data:{
    G_Count:"v.1.1.0"
  },
  methods:{
    setCount(){
      return "修改版本"
    }
  },
  // 渲染方法
  render: h => h(App),
}).$mount('#app')
