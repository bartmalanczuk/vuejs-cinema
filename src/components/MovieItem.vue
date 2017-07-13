<template>
    <div class="movie">
        <div class="movie-col-left">
            <img v-bind:src="movie.Poster" v-bind:alt="movie.Title">
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <router-link v-bind:to="{ name: 'movie', params: { id: movie.imdbID }}">
                    <h2>{{ movie.Title }}</h2>
                </router-link>
                <div class="movie-rating">{{ movie.Rated }}</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'movie' ],
    };
</script>
