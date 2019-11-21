import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Shops from './components/Shops';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'/books-store/', name:'home', component:Home},
    {path:'/books-store/shops', name:'shops', component:Shops}
  ],
});

export default router;
