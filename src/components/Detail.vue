<template>
    <div id="detail">
        <movie-item v-if="movie" v-bind:movie="movie">
            <div class="movie-details">
                <p class="movie-genre">{{ movie.Genre }}</p>
                <p class="movie-plot">{{ movie.Plot }}</p>
                <table>
                    <tr>
                        <td>Released date:</td>
                        <td>{{movie.Released}}</td>
                    </tr>
                    <tr>
                        <td>Running time:</td>
                        <td>{{movie.Runtime}}</td>
                    </tr>
                    <tr>
                        <td>Director:</td>
                        <td>{{movie.Director}}</td>
                    </tr>
                    <tr>
                        <td>Cast:</td>
                        <td>{{movie.Actors}}</td>
                    </tr>
                </table>
            </div>
        </movie-item>
        <div class="home">
            <router-link v-bind:to="{name: 'home'}">Back to results</router-link>
        </div>
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
                this.movie = response.data.find((movie) => movie.movie.imdbID === this.$route.params.id).movie;
            });
        },
        components: {
            MovieItem,
        },
    };
</script>
