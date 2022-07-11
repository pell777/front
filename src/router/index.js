import Vue from "vue";
import VueRouter from "vue-router";
import AuthView from "../views/AuthView.vue";
import RegView from "../views/RegView.vue";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Authorization",
    component: AuthView,
  },
  {
    path: "/registration",
    name: "RegView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegView.vue"),
  },
  {
    path: "/main",
    name: "MainView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
