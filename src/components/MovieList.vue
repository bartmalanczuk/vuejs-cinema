<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-bind:movie="movie.movie" v-bind:sessions="movie.sessions" v-for="movie in filteredMovies"></movie-item>
        </div>
        <div class="no-results" v-else-if="movies.length">
            No results.
        </div>
        <div class="no-results" v-else>
            Loading...
        </div>
    </div>
</template>
<script>
    import genres from '../util/genres.js';
    import MovieItem from './MovieItem.vue';

    export default {
        props: [ 'movies', 'genre', 'time', ],
        computed: {
            filteredMovies() {
                if (this.genre.length > 0) {
                    return this.movies.filter(movie => this.genre.some(genre => movie.movie.Genre.match(genre)));
                }
                return this.movies;
            },
        },
        components: {
            MovieItem,
        },
    };
</script>
