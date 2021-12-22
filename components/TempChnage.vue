<template>
  <div class="temperature-toggle">
    <label>
      <input
        type="radio"
        id="celcius"
        name="temperature"
        value="cel"
        checked="checked"
        v-model="selected"
      />
      <span>&#176;C</span>
    </label>
    <label>
      <input
        type="radio"
        id="farenheit"
        name="temperature"
        value="far"
        v-model="selected"
      />
      <span>&#176;F</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TempChnage",
  data() {
    return {
      selected: "cel",
    };
  },
  updated: function () {
    this.$store.commit("SET_UNIT", this.selected);
  },
};
</script>