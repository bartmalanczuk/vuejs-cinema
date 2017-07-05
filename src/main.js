import './style.scss';
import genres from './util/genres.js';
import Vue from 'vue';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                           <div class="movie" v-for="movie in movies">{{ movie.title }}</div>
                       </div>`,
            data() {
                return {
                    movies: [
                        { title: 'Pulp Fiction' },
                        { title: 'Home Alone' },
                        { title: 'Manchaster by the Sea' },
                    ],
                };
            },
        },
        'movie-filter': {
            template: `<div id="movie-filter">
                           <h2>Filter results</h2>
                           <div class="filter-group">
                               <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                           </div>
                       </div>`,
            data() {
                return {
                    genres,
                };
            },
            components: {
                'check-filter': {
                    template: `<div v-bind:class="{ 'check-filter': true, 'active': checked }">
                                   <span class="checkbox" v-on:click="checked = !checked"></span>
                                   <span class="check-filter-title">{{ title }}</span>
                               </div>`,
                    props: [ 'title' ],
                    data() {
                        return {
                            checked: false,
                        };
                    },
                },
            },
        },
    },
});
