//src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from '../components/CountryDetails.vue'
import CountriesList from "../components/CountriesList.vue";

const routes = [

    {
        path: '/',
        component: CountriesList
    },
  
    {
        path: '/countries/:alpha3Code',
        name: 'country-details',
        component: CountryDetails
    } 
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;