import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../modules/Login';
import Dashboard from '../modules/Dashboard';
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
