import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import App from './views/App.vue';

window.axios = axios;

// Vue.component('hello-world', App);
Vue.component('app', App);

const router = Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: { App },
    router: routes
});
