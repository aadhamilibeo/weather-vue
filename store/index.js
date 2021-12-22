export const state = () => ({
  unit: "cel",
  setSearch: false
})

export const mutations = {
  SET_UNIT(state, value) {
    console.log('SET_UNIT', value)
    state.unit = value
  },
  SET_SEARCH(state, value) {
    console.log('SET_SEARCH', value)
    state.setSearch = value
  }
}