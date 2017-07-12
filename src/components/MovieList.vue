<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-bind:movie="movie.movie"
                        v-bind:sessions="getSessionsForDayAndTime(movie.sessions)"
                        v-for="movie in filteredMovies"
            ></movie-item>
        </div>
        <div class="no-results" v-else-if="movies.length">
            No results for {{ appliedFiletrsString }}.
        </div>
        <div class="no-results" v-else>
            Loading...
        </div>
    </div>
</template>
<script>
    import genres from '../util/genres.js';
    import times from '../util/times.js';
    import MovieItem from './MovieItem.vue';

    export default {
        props: [ 'movies', 'genre', 'time', 'day' ],
        computed: {
            filteredMovies() {
                return this.movies.filter((movie) => {
                    return this.genre.length <= 0 || this.genre.some(genre => movie.movie.Genre.match(genre));
                }).filter((movie) => {
                    return this.getSessionsForDayAndTime(movie.sessions, this.day, this.time).length > 0;
                });
            },
            appliedFiletrsString() {
                return this.time.concat(this.genre).join(', ');
            },
        },
        components: {
            MovieItem,
        },
        methods: {
            getSessionsForDayAndTime(sessions) {
                return sessions.filter((session) => {
                    if (!this.$moment(session.time).isSame(this.day, 'day')) {
                        return false;
                    } else if (this.time.length === 0 || this.time.length === 2) {
                        return true;
                    } else if (this.time[0] === times.BEFORE_6PM) {
                        return this.$moment(session.time).hour() <= 18;
                    } else {
                        return this.$moment(session.time).hour() >= 18;
                    }
                });
            },
        },
    };
</script>
