<template>
  <section class="main">
    <template v-if="$store.state.setSearch == false">
      <WeatherStatus />
    </template>
    <template v-else>
      <SearchForm />
    </template>
    <WeatherDetail />
  </section>
</template>

<script>
import WeatherStatus from "~/components/WeatherStatus.vue";
import WeatherDetail from "~/components/WeatherDetail.vue";
import SearchForm from "~/components/SearchForm.vue";
export default {
  components: {
    WeatherStatus,
    WeatherDetail,
    SearchForm,
  },
};
</script>