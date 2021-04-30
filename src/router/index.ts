import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/inventory/add-item',
    name: 'AddInventoryItem',
    component: () => {
      return import('@/store/inventory/views/AddInventoryItem.vue');
    },
  },
  {
    path: '/counter/checkout',
    name: 'Checkout',
    component: () => {
      return import('@/store/counter/views/Checkout.vue');
    },
  },
  {
    path: '/',
    name: 'Layout',
    children: [
      {
        path: '/inventory',
        name: 'Inventory',
        component: () => {
          return import('@/store/inventory/views/Inventory.vue');
        },
      },

      {
        path: '/counter',
        name: 'Counter',
        component: () => {
          return import('@/store/Counter/views/Counter.vue');
        },
      },
    ],
    component: () => {
      return import('@/components/Main/Layout.vue');
    },
  },

  {
    path: '/',
    name: 'Home',
    component: () => {
      return import('@/components/Home/Home.vue');
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
