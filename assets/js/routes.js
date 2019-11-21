import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home";
import Shops from "./components/Shops";

const router = new VueRouter({
  mode: 'history',
  router: [
    { path: '/book-info', name: 'home', component: Home },
    { path: '/book-info/shops', name: 'shops', component: Shops },
  ]
});

export default router;
