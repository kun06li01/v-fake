import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Add from '@/components/Add';
import Goods from '@/components/goods/Goods';
import Ratings from '@/components/ratings/Ratings';
import Seller from '@/components/seller/Seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/path',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ],
  linkActiveClass: 'active'
});
