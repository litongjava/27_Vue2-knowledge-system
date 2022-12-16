import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from "axios"
import qs from "querystring"

axios.defaults.baseURL = 'http://iwenwiki.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
axios.interceptors.request.use(
  config =>{

    if(config.method === 'post'){
      if(config.data){
        console.log("config.data",config.data);
        console.log("stringify");
        config.data = qs.stringify(config.data)
        console.log("config.data",config.data);
      }
    }

    return config
  },
  error => Promise.reject(error)
);

//响应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => Promise.reject(error)
);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
