
export const state = () => ({
  query: null,
  forecast: [],
  unit: "cel",
  setSearch: false,
})

export const mutations = {
  SET_FORECAST(state, value) {
    state.forecast = value
  },
  SET_UNIT(state, value) {
    state.unit = value
  },
  updateQuery(state, query) {
    state.query = query
  },
  SET_SEARCH(state, value) {
    state.setSearch = value
  },
}
export const actions = {
  async setForecasts({ commit }) {
    const data = await this.$axios.get(`api/location/search/?query=${this.state.query}`)
    const value = await this.$axios.get(`api/location/${data.data[0].woeid}/`)
    commit('SET_FORECAST', value);
  },

}

