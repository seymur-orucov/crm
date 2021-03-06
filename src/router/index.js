import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "Auth" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "Main" },
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/",
    name: "home",
    meta: { layout: "Main" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/detail:id",
    name: "detail",
    meta: { layout: "Main" },
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "Main" },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "Main" },
    component: () => import("../views/Planning.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "Main" },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "Main" },
    component: () => import("../views/Record.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "Auth" },
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
