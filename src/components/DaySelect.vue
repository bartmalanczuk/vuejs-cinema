<template>
    <div id="day-select">
        <ul class="days">
            <li v-for="day in days" v-bind:class="{ 'day': true, 'active': isDaySelected(day) }" v-on:click="selectDay(day)">{{ formatDay(day) }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: [ 'day' ],
        data() {
            return {
                days: [0, 1, 2, 3, 4, 5, 6].map(number => this.$moment().add(number, 'days')),
            };
        },
        methods: {
            formatDay(raw) {
                if (raw.isSame(this.$moment(), 'days')) {
                    return 'Today';
                }
                return raw.format('ddd DD/MM');
            },
            selectDay(day) {
                this.$emit('change-day', day);
            },
            isDaySelected(day) {
                return day.isSame(this.day, 'days');
            },
        },
    };
</script>
