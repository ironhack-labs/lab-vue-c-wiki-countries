import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "CountriesList",
    component: () => import("@/components/CountriesList.vue"),
    children: [
      {
        path: "/:alpha3Code",
        name: "CountryDetails",
        component: () => import("@/components/CountryDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;