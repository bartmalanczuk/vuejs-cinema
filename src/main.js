import './style.scss';
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment-timezone';

Vue.use(VueResource);

moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get: () => moment });

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
    },
    methods: {
        checkFilter(category, title, checked) {
            if (checked) {
                this[category].push(title);
            } else {
                const indexOfItem = this[category].indexOf(title);
                if (indexOfItem !== -1) {
                    this[category].splice(indexOfItem, 1);
                }
            }
        },
    },
    components: {
        MovieList,
        MovieFilter,
    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
    },
});
