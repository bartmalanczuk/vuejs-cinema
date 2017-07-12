<template>
    <div id="detail">
        <movie-item v-if="movie" v-bind:movie="movie.movie" v-bind:sessions="[]"></movie-item>
    </div>
</template>
<script>
    import MovieItem from './MovieItem.vue';

    export default {
        data() {
            return {
                movie: undefined,
            };
        },
        created() {
            this.$http.get('/api').then(response => {
                this.movie = response.data.find((movie) => movie.movie.imdbID === this.$route.params.id);
            });
        },
        components: {
            MovieItem,
        },
    };
</script>
