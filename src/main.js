import './style.scss';
import genres from './util/genres.js';
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
        'movie-list': {
            template: `<div id="movie-list">
                           <div class="movie" v-for="movie in filteredMovies">{{ movie.title }}</div>
                       </div>`,
            props: [ 'genre', 'time', ],
            data() {
                return {
                    movies: [
                        { title: 'Pulp Fiction', genre: genres.CRIME },
                        { title: 'Home Alone', genre: genres.COMEDY },
                        { title: 'Manchaster by the Sea', genre: genres.DRAMA },
                    ],
                };
            },
            computed: {
                filteredMovies() {
                    if (this.genre.length > 0) {
                        return this.movies.filter(movie => this.genre.some(genere => genere === movie.genre));
                    }
                    return this.movies;
                },
            },
        },
        'movie-filter': {
            template: `<div id="movie-filter">
                           <h2>Filter results</h2>
                           <div class="filter-group">
                               <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
                           </div>
                       </div>`,
            data() {
                return {
                    genres,
                };
            },
            methods: {
                checkFilter(category, title, checked) {
                    this.$emit('check-filter', category, title, checked);
                },
            },
            components: {
                'check-filter': {
                    template: `<div v-bind:class="{ 'check-filter': true, 'active': checked }">
                                   <span class="checkbox" v-on:click="checkFilter"></span>
                                   <span class="check-filter-title">{{ title }}</span>
                               </div>`,
                    props: [ 'title' ],
                    data() {
                        return {
                            checked: false,
                        };
                    },
                    methods: {
                        checkFilter() {
                            this.checked = !this.checked;
                            this.$emit('check-filter', 'genre', this.title, this.checked);
                        },
                    },
                },
            },
        },
    },
});
