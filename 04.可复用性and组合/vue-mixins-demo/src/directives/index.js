import Vue from "vue"

// v-focus
Vue.directive("focus", {
  // 指令钩子函数
  inserted(el) {
    console.log(el); // HTML元素对象
    el.focus();
  }
})


// v-red
Vue.directive("red", {
  inserted(el) {
    el.style.color = '#ff0000'
  }
})


// v-show
Vue.directive("myShow", {
  bind(el, binding, vnode, oldVnode) {
  },
  inserted(el, binding, vnode, oldVnode) {
    console.log(binding.name);
    console.log(binding.value);
    if (binding.value) {
      el.style.display = 'block'
    } else {
      el.style.display = "none"
    }
  },
  update(el, binding, vnode, oldVnode) {
    console.log("改变内容之前:" + el.innerHTML);
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log("改变内容之后:" + el.innerHTML);
  },
  unbind(el, binding, vnode, oldVnode) {
  }
})