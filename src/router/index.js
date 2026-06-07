// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../components/CountryDetails.vue";
import CountriesList from "../components/CountriesList.vue";

const routes = [
  {
    path: "/",
    name: "list",
    component: CountriesList,
    children: [
      {
        path: "/:alpha3Code",
        name: "detailslist",
        component: CountryDetails,
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