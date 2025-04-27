import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
  {
    path: "/list/:alpha3Code",
    name: "details", 
    component: () => import("../components/CountryDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app")?.scrollIntoView();
  },
});

export default router;
