import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [{ path: '/', component: () => import('@/views/HomeView.vue') }],
    },
    {
      path: '/questions',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [{ path: '/questions', component: () => import('@/views/NotFoundView.vue') }],
    },
    {
      path: '/discussions',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [{ path: '/discussions', component: () => import('@/views/NotFoundView.vue') }],
    },
    {
      path: '/governance',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [{ path: '/governance', component: () => import('@/views/NotFoundView.vue') }],
    }
  ]
});

export default router;
