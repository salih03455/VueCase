import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobList: [],
    searchKey: '',
    searchLocation: ''
  },
  mutations: {
    updateJobList(state, value) {
      state.jobList = [...value]
    },
    updateSearchKey(state, value) {
      state.searchKey = value
    },
    updateSearchLocation(state, value) {
      state.searchLocation = value
    }
  },
  actions: {
  },
  getters: {
    getJobList(state) {
      return state.jobList
    },
    getSearchKey(state) {
      return state.searchKey
    },
    getSearchLocation(state) {
      return state.searchLocation
    }
  },
  modules: {
  }
})
