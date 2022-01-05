  <template>
  <section v-if="forecast != ''" class="main">
    <template v-if="$store.state.setSearch == false">
      <WeatherStatus :forecast="forecast.data" />
    </template>
    <template v-else>
      <SearchForm />
    </template>
    <WeatherDetail :forecast="forecast.data" />
  </section>
  <section v-else>
    <Loader />
  </section>
</template>
<script>
import WeatherStatus from "~/components/WeatherStatus.vue";
import Loader from "~/components/Loader.vue";
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
    forecast() {
      return this.$store.state.forecast;
    },
  },
  methods: {
    loadOnce: function () {
      location.reload();
    },
  },
  mounted: function () {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
    this.$store.commit("SET_SEARCH", false);
    const slug = this.$route.params.slug;
    this.$store.commit("updateQuery", slug);
    this.$store.dispatch("setForecasts");
  },
};
</script>