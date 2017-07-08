<template>
    <div id="movie-list">
        <div class="movie" v-for="movie in filteredMovies">{{ movie.title }}</div>
    </div>
</template>
<script>
    import genres from '../util/genres.js';

    export default {
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
    };
</script>
