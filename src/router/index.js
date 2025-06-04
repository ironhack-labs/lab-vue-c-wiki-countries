import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:alpha3Code(\\w{3})?',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app')?.scrollIntoView();
  },
});

export default router;
