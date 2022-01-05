<template>
  <div class="search-form">
    <span class="material-icons close-icon" v-on:click="openSearch">
      close
    </span>

    <div class="pt-3 search-box">
      <b-field>
        <b-input
          class="input-group"
          placeholder="Search Location"
          v-model="selected"
          expanded
        ></b-input>
        <p class="control">
          <NuxtLink :to="selected" class="button is-primary"> Search </NuxtLink>
        </p>
      </b-field>
    </div>
    <ul class="form-value pt-5 mb-0 ps-0" v-if="lists != ''">
      <li v-for="(list, index) in lists" :key="index">
        <NuxtLink :to="list.title"> {{ list.title }} </NuxtLink>
      </li>
    </ul>
    <ul class="form-value pt-5 mb-0 ps-0" v-else>
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
  data() {
    return {
      data: [
        { title: "name", dic: "value" },
        { title: "namdasde", dic: "dsadsad asd" },
      ],
      name: "",
      selected: "",
      lists: '',
    };
  },
  methods: {
    openSearch: function (event) {
      this.$store.commit("SET_SEARCH", false);
    },
  },
  updated: async function () {
    if (this.selected) {
      const value = await this.$axios.get(
        `api/location/search/?query=${this.selected}`
      );
      this.lists = value.data;
    }
  },
};
</script>
