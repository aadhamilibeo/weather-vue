
// import axios from 'axios'

// export const state = () => ({
//   data: [],
//   unit: "cel",
//   setSearch: false,
//   weather: []
// })

// export const mutations = {
//   SET_DATA(state, value) {
//     state.data = value
//   },
//   SET_UNIT(state, value) {
//     state.unit = value
//   },
//   SET_SEARCH(state, value) {
//     state.setSearch = value
//   },
//   SET_WEATHER(state, value) {
//     state.weather = value
//   }
// }
// export const actions = {
//   async nuxtServerInit({ commit }, { $axios }) {
//     const value = await $axios.$get('https://www.metaweather.com/api/location/44418/')
//     commit('SET_DATA', value)
//   },
//   async getIP({ commit }) {
//     const data = await axios.get(`https://www.metaweather.com/api/location/search/?query=london`)
//     commit('SET_WEATHER', data)
//   },
// }



export const state = () => ({
  query: 'london',
  data: [],
  unit: "cel",
  setSearch: false,
  weather: []
})

export const mutations = {
  SET_DATA(state, value) {
    state.data = value
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
  SET_WEATHER(state, value) {
    state.weather = value
  },
}
export const actions = {
  async setForecasts({ commit }) {
    const value = await this.$axios.$get('https://www.metaweather.com/api/location/44418/')
    console.log("Hello")
    commit('SET_DATA', value)
  },
  // async setForecasts({ commit }) {
  //   const data = await this.$axios.$get(`https://www.metaweather.com/api/location/44418/`)
  //   commit('SET_DATA', data);
  // }
}

