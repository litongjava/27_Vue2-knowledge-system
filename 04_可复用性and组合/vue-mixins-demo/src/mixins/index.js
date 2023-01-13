export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          token: '用户登陆了'
        }
      }
    })
  }
}