import './style.scss';
import Overview from './components/Overview.vue';
import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment-timezone';

Vue.use(VueResource);

moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get: () => moment });

new Vue({
    el: '#app',
    components: {
        Overview,
    },
});
