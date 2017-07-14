import './style.scss';
import routes from './util/routes.js';
import Tooltip from './util/tooltip.js';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import moment from 'moment-timezone';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Tooltip);

moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get: () => moment });

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
});
