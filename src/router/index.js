import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
  },
  {
    path: "/:pathMatch(.*)*",

    component: PageNotFound,
  },
  {
    path: "/terminos-y-condiciones",
    name: "terminos",
    component: () => import("../pages/TermsAndConditionsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
