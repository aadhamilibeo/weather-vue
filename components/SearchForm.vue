<template>
  <div class="search-form">
    <span class="material-icons close-icon" v-on:click="openSearch">
      close
    </span>
    <div class="pt-3">
      <b-field>
        <b-input placeholder="Search Location" type="search" icon="magnify" expanded>
        </b-input>
        <p class="control">
          <b-button label="Search" type="is-primary" />
        </p>
      </b-field>
    </div>
    <ul class="form-value pt-5 mb-0 ps-0">
      <li>
        <NuxtLink to="/London"> London </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Barcelona"> Barcelona </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Long Beach"> Long Beach </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  methods: {
    openSearch: function (event) {
      this.$store.commit("SET_SEARCH", false);
    },
  },
};
</script>
