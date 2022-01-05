<template>
  <div class="weather-status">
    <header>
      <button class="button is-gray" v-on:click="openSearch">
        Seach for places
      </button>
      <span class="location-icon">
        <span class="material-icons material-icons-outlined"> gps_fixed </span>
      </span>
    </header>

    <div class="state-abbr">
      <div
        class="state-abbr-bg"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <img
        :src="require('@/assets/img/' + today.weather_state_abbr + '.png')"
        :alt="today.weather_state_name"
      />
    </div>
    <div class="state-temp">
      <h2 class="temp" v-if="$store.state.unit == 'cel'">
        {{ Math.round(today.the_temp) }}
        <span class="text-dark">&#176;C</span>
      </h2>
      <h2 class="temp" v-else>
        {{ (Math.round(today.the_temp) * 9) / 5 + 32 }}
        <span class="text-dark">&#176;F</span>
      </h2>
    </div>
    <div class="state-name">
      <h5 class="name text-dark fw-bold">{{ today.weather_state_name }}</h5>
    </div>
    <div class="text-dark">
      <div class="date">
        <span>Today</span>
        <span class="dot"></span>
        <span>{{ weatherDate }}</span>
      </div>
      <div class="location">
        <span class="material-icons"> location_on </span>
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "assets/img/Cloud-background.png";

export default {
  name: "WeatherStatus",
  props: ["forecast"],
  data() {
    return {
      image: bgImage,
      today: this.forecast.consolidated_weather[0],
      title: this.forecast.title,
      weatherDate:
        this.forecast.consolidated_weather[0].applicable_date,
    };
  },
  methods: {
    openSearch: function (event) {
      this.$store.commit("SET_SEARCH", true);
    },
  },
  mounted: function () {
    let date = new Date(this.weatherDate);
    this.weatherDate = date.toLocaleString("en-US", {
      day: "numeric",
      weekday: "short",
      month: "short",
    });
  },
};
</script>
