<template>
  <p class="text-center" v-if="$fetchState.pending">Fetching mountains...</p>
  <p class="text-center" v-else-if="$fetchState.error">Fetching error</p>
  <section v-else class="main">
    <template v-if="$store.state.setSearch == false">
      <WeatherStatus :weatherData="{ values }" />
    </template>
    <template v-else>
      <SearchForm />
    </template>
    <WeatherDetail :weatherData="{ values }" />
  </section>
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
  data() {
    return {
      values: [],
    };
  },
  async fetch() {
    this.values = await fetch(
      "https://www.metaweather.com/api/location/44418/"
    ).then((res) => res.json());
  },
    async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>
