<template>
    <div id="overview">
        <div class="main">
            <movie-list v-bind:movies="movies" v-bind:genre="genre" v-bind:time="time" v-bind:day="day"></movie-list>
            <movie-filter v-on:check-filter="checkFilter"></movie-filter>
        </div>
    </div>
</template>
<script>
    import MovieList from './MovieList.vue';
    import MovieFilter from './MovieFilter.vue';
    import moment from 'moment-timezone';

    export default {
        data() {
            return {
                genre: [],
                time: [],
                movies: [],
                day: moment(),
            };
        },
        components: {
            MovieList, MovieFilter,
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
        created() {
            this.$http.get('/api').then(response => {
                this.movies = response.data;
            });
        },
    };
</script>
