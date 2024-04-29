import { createRouter, createWebHashHistory } from "vue-router";
import myInvitation from "../views/myInvitation.vue";
import SecondLanguage from "../views/SecondLanguage.vue";

const routes = [
  {
    path: "/ar",
    name: "Arabic",
    component: myInvitation,
  },
  {
    path: "/en",
    name: "English",
    component: SecondLanguage,
  },
  // {
  //   path: "/eng",
  //   name: "English",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
