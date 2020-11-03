import { createRouter, createWebHistory } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';
import { asyncRouterMap } from '../config/router.config';
const routes = [
  {
    path: '/',
    name: 'Homelll',
    component: BasicLayout,
    children: asyncRouterMap,
  },
  {
    path: '/test',
    name: 'test8888',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
