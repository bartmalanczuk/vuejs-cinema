<template>
    <div id="movie-list">
        <movie-item v-bind:movie="movie.movie" v-for="movie in filteredMovies"></movie-item>
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
                    return this.movies.filter(movie => this.genre.some(genere => genere === movie.genre));
                }
                return this.movies;
            },
        },
        components: {
            MovieItem,
        },
    };
</script>
