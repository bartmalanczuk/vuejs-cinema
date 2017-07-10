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
            <div class="movie-sessions">
                <div class="session-time-wrapper" v-for="session in filteredSessions">
                    <div class="session-time">{{ formatSessionTime(session.time) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'movie', 'sessions', 'day' ],
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format('h:mm A');
            },
        },
        computed: {
            filteredSessions() {
                return this.sessions.filter(
                    session => this.$moment(session.time).isSame(this.day, 'day')
                );
            },
        },
    };
</script>
