import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobList: []
  },
  mutations: {
    updateJobList(state, value) {
      state.jobList = [...value];
    }
  },
  actions: {
  },
  getters: {
    getJobList(state) {
      return state.jobList
    }
  },
  modules: {
  }
})
