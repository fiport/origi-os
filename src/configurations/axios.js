import Vue from 'vue';
import axios from 'axios';
import VueToast from 'vue-toast-notification';
import { SYSTEM_VARIABLE } from '../modules/Application';
import { getToken } from './token';

Vue.use(VueToast, {
  position: 'top-right',
  duration: 8000,
});

export const http = axios.create({
  baseURL: `${SYSTEM_VARIABLE.BASE_URL_API}/api`,
  headers: {
    Accept: 'application/json',
  },
});

http.interceptors.request.use(async (config) => ({
  ...config,
  headers: {
    ...config.headers,
    'Authorization-Type': 'Bearer',
    'Authorization': 'Bearer ' + getToken(),
  },
}));

http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status == 401) {
    Vue.$toast.error('É necessário estar logado!');
    return window.location.href = '/#/login';
  }
  return  Promise.reject(error);
});
