<template>
  <!-- <section class="main">
    <template v-if="$store.state.setSearch == false">
      <WeatherStatus />
    </template>
    <template v-else>
      <SearchForm />
    </template>
    <WeatherDetail />
  </section> -->
  <div>
    {{ weather }}
  </div>
</template>

<script>
import WeatherStatus from "~/components/WeatherStatus.vue";
import WeatherDetail from "~/components/WeatherDetail.vue";
import SearchForm from "~/components/SearchForm.vue";
export default {
  name: "IndexPage",
  components: {
    WeatherStatus,
    WeatherDetail,
    SearchForm,
  },
  computed: {
    weather() {
      return this.$store.state.data;
    },
    mounted() {
      this.$store.dispatch("setForecasts");
    },
  },
};
</script>