<template>
    <div id="movie-list">
        <div class="movie" v-for="movie in filteredMovies">{{ movie.movie.Title }}</div>
    </div>
</template>
<script>
    import genres from '../util/genres.js';

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
    };
</script>
