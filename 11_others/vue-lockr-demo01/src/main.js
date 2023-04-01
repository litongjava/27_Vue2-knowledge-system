import Vue from 'vue'
import App from './App.vue'
import Lockr from 'lockr'
Vue.config.productionTip = false;
//设置一个前缀，该前缀会被追加到每一个键的字符串前面
Lockr.prefix = 'lockr';
Lockr.set('username', 'clown'); // Saved as string
let username = Lockr.get('username');
console.log("username",username);
//Vue.prototype.$lockr=Lockr;
new Vue({
  render: h => h(App),
}).$mount('#app');
