import './style.scss';
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
            }
        },
        'movie-filter': {
            template: `<div id="movie-filter">
                           <h2>Filter results</h2>
                       </div>`,
        },
    }
});
