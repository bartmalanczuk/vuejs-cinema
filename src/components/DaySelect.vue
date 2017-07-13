<template>
    <div id="day-select">
        <ul class="days">
            <li v-for="day in days" v-bind:class="{ 'day': true, 'active': isDaySelected(day) }" v-on:click="selectDay(day)">{{ formatDay(day) }}</li>
            <li class="day-selector">
                <span class="dec" v-on:click="selectDayRelative(-1)"></span>
                <span class="inc" v-on:click="selectDayRelative(1)"></span>
            </li>
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
            selectDayRelative(difference) {
                const newDay = this.$moment(this.day).add(difference, 'days');
                if (this.days.some(day => newDay.isSame(day, 'days'))) {
                    this.$emit('change-day', newDay);
                }
            },
            isDaySelected(day) {
                return day.isSame(this.day, 'days');
            },
        },
    };
</script>
