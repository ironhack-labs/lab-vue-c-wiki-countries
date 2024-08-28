import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from '../components/CountriesList.vue';
import CountryDetails from '../components/CountryDetails.vue';

const routes = [
  {
      path: '/',
      name: 'CountriesList',
      component: CountriesList,
    },
    {
      path: '/countries/:countryName',
      name: 'CountryDetails',
      component: CountryDetails,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // Scroll to top on route change
  },
});

export default router;
