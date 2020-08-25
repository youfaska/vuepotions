import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lists",
    name: "TodoList",
    props: true,

    component: () =>
      import(/* webpackChunkName: "TodoList" */ "../views/TodoList.vue")
  },
  {
    path: "/users",
    name: "Users",

    component: () =>
      import(/* webpackChunkName: "TodoList" */ "../views/Users.vue")
  },
  {
    path: "/error",
    component: Error,
    alias: "404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
