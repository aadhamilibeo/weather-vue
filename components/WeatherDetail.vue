<template>
  <div class="weather-detail-container">
    <div class="weather-detail">
      <TempChnage />
      <div class="weather-box">
        <div
          v-for="(item, index) in items"
          class="weather-inner text-center"
          :key="index"
        >
          <template v-if="index > 0">
            <div class="boxs">
              <div class="box-date">
                <span v-if="index == 1">Tomorrow</span>
                <span v-else>{{ weatherDay[index] }}</span>
              </div>
              <div class="box-icon">
                <img
                  :src="
                    require('@/assets/img/' + item.weather_state_abbr + '.png')
                  "
                  :alt="item.weather_state_name"
                  width="50"
                  height="50"
                />
              </div>
              <div class="box-temp" v-if="$store.state.unit == 'cel'">
                <span>
                  {{ Math.round(item.max_temp) }}
                  <span class="temp-icon">&#176;C</span>
                </span>
                <span class="text-dark">
                  {{ Math.round(item.min_temp) }}
                  <span class="temp-icon">&#176;C</span>
                </span>
              </div>
              <div class="box-temp" v-else>
                <span>
                  {{ (Math.round(item.max_temp) * 9) / 5 + 32 }}
                  <span class="temp-icon">&#176;F</span>
                </span>
                <span class="text-dark">
                  {{ (Math.round(item.min_temp) * 9) / 5 + 32 }}
                  <span class="temp-icon">&#176;F</span>
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="weather-hightlights">
        <h3 class="titles">Today's Hightlights</h3>
        <div class="highlights">
          <div class="highlights-box text-center">
            <p>Wind Status</p>
            <span class="value"
              >{{ Math.round(today.wind_speed) }}<span>mph</span></span
            ><span class="icons d-block mt-2"
              ><span class="material-icons">near_me</span><span>WSW</span></span
            >
          </div>
          <div class="highlights-box text-center">
            <p>Humidity</p>
            <span class="value">{{ today.humidity }}<span>%</span></span>
            <div class="progress-container mt-3">
              <div class="progress-scale">
                <span>0</span><span>50</span><span>100</span>
              </div>
              <b-progress
                type="is-warning"
                :value="today.humidity"
                class="mb-0"
              ></b-progress>
              <div class="progress-scale bottom"><span>%</span></div>
            </div>
          </div>
          <div class="highlights-box text-center">
            <p>Visibility</p>
            <span class="value"
              >{{ Math.round(today.visibility) }}<span>miles</span></span
            >
          </div>
          <div class="highlights-box text-center">
            <p>Air Pressure</p>
            <span class="value">{{ today.air_pressure }}<span>mb</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section text-center py-3">
      <p class="mb-0 text-dark">
        Created by
        <a href="https://github.com/aadhamilibeo/" class="fw-bold"
          >Aria Adhami</a
        >
        - devchallenges.io
      </p>
    </div>
  </div>
</template>

<script>
import TempChnage from "./TempChnage";
export default {
  name: "WeatherDetail",
  props: ["weatherData"],
  components: {
    TempChnage,
  },
  data() {
    return {
      weatherDay: [""],
      items: this.weatherData.values.consolidated_weather,
      today: this.weatherData.values.consolidated_weather[0],
    };
  },

  mounted: function () {
    let dates = [];
    for (
      let i = 0;
      i < this.weatherData.values.consolidated_weather.length;
      i++
    ) {
      let date = new Date(
        this.weatherData.values.consolidated_weather[i].applicable_date
      );
      dates.push(
        date.toLocaleString("en-US", {
          day: "numeric",
          weekday: "short",
          month: "short",
        })
      );
    }

    this.weatherDay = dates;
  },
};
</script>
