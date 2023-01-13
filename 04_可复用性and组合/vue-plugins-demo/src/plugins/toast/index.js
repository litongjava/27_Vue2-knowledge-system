var Toast = {}
Toast.install = function (Vue, options) {

  let opt = {
    duration: 3000,
    defaultType: "success"
  };

  Vue.prototype.$toast = (tips, type) => {
    if (type.duration) {
      opt.duration = type.duration
    }
    if (type.defaultType) {
      opt.defaultType = type.defaultType
    }
    let toastTpl = new Vue({
      render() {
        return (
          <div class={['vue-toast', 'toast-' + opt.defaultType]}>{tips}</div>
      )
      }
    });

    let tpl = toastTpl.$mount().$el; // 创建实例，挂载到文档中
    document.body.appendChild(tpl);
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, opt.duration)
  };

  ["success", "danger", "warning"].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })

};

export default Toast
