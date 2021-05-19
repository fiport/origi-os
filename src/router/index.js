import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../modules/Login';
import Dashboard from '../modules/Dashboard';
import Products from '../modules/Products';
import Services from '../modules/Services';
import People from '../modules/People';
import Payments from '../modules/Payments';
import Default from '../container';

Vue.use(VueRouter);

const routes = [
  ...Login,
  ...[
    {
      component: Default,
      path: '',
      children: [
        ...Dashboard,
        ...Products,
        ...Services,
        ...People,
        ...Services,
        ...Payments
      ],
    },
  ],  
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
