import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/About.vue'),
    /**
     * 路由独享导航守卫
     */
    beforeEnter: (to, from, next) => {
      next();
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if(savedPosition){
      return savedPosition;
    }else{
      return {
        x: 0,
        y: 0,
      }
    }
  }
});

/**
 * 全局前置导航守卫
 *
 * 所有的路由跳转都会触发这个函数
 */
router.beforeEach((to, form, next) => {
  // console.log(to);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //需要判断用户是否登录

    //用户是否已经登录
    const token = true;
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

/*
全局解析守卫
 */
router.beforeResolve((to, form, next) => {
  next();
});


export default router
