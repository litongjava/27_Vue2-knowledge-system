import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AD from "../views/AD.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path:"/home",
  //   redirect:"/"
  // },
  {
    path: '/',
    name: 'Home',
    alias: "/home",
    component: Home
  },
  {
    path: '/about',
    redirect: "/about/a1",
    name: 'About',
    components: {
      default: () => import('../views/About.vue'),
      ad: AD
    },
    children: [
      {
        path: "a1", // /about/a1
        name: "A1",
        component: () => import("../views/AboutSub/A1.vue")
      },
      {
        path: "a2",
        name: "A2",
        component: () => import("../views/AboutSub/A2.vue")
      }
    ]
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
    props: true
  },
  {
    path: "/user",
    name: "User",
    components: {
      default: () => import("../views/User.vue"),
      ad: AD
    }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: 'hash', // 如果没有特殊要求，推荐使用hash模式，因为history模式需要后台做重定向
  base: process.env.BASE_URL,
  routes
});

export default router
