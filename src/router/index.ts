import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FullstackView from '@/views/FullstackView.vue';
import BackendView from '@/views/BackendView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/fullstack',
      name: 'fullstack',
      component: FullstackView,
    },
    {
      path: '/backend',
      name: 'backend',
      component: BackendView,
    },
  ],
});

export default router;
