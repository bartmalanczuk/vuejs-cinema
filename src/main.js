import './style.scss';
import Vue from 'vue';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                           Movie list
                       </div>`,
        },
        'movie-filter': {
            template: `<div id="movie-filter">
                           Movie filter
                       </div>`,
        },
    }
});
