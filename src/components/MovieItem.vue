<template>
    <div class="movie">
        <div class="movie-col-left">
            <img v-bind:src="movie.Poster" v-bind:alt="movie.Title">
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <h2>{{ movie.Title }}</h2>
                <div class="movie-rating">{{ movie.Rated }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'movie' ]
    };
</script>
