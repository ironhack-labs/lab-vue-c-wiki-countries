import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "list",
    component: () => import("../components/CountriesList.vue"),
    children: [
      {
        path: ":alpha3Code",
        name: "contryDetails",
        component: () => import("../components/CountryDetails.vue"),
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

// import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   {
//     path: "/",
//     name: "list", // Nombre único para la ruta principal
//     component: () => import("../components/CountriesList.vue"),
//     children: [
//       {
//         path: ":alpha3Code", // Ruta hija dinámica (sin prefijo /list/)
//         name: "country-details", // Nombre único para la ruta hija
//         component: () => import("../components/CountryDetails.vue"),
//       },
//     ],
//   },
// ];

// const router = createRouter({
//   history: createWebHistory("/"),
//   routes,
//   scrollBehavior() {
//     document.getElementById("app").scrollIntoView();
//   },
// });

// export default router;