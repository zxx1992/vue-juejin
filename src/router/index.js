/*
 * @Description: ...页面文件
 * @Autor: zxx
 * @Date: 2020-12-01 22:20:41
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-14 18:54:46
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Index from "../views/evaluate/Index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      keepAlive: true  // 需要缓存
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      keepAlive: false  // 需要缓存
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
