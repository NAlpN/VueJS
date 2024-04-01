import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

const router = new VueRouter({
  routes
});

export default router;
