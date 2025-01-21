import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FullstackView from '@/views/FullstackView.vue';
import BackendView from '@/views/BackendView.vue';

const router = createRouter({
  history: createWebHashHistory(),
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
