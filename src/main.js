import './style.scss';
import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'
import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
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
});
