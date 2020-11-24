import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobList: [],
    jobDetail: null,
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
    },
    updateJobDetail(state, value) {
      state.jobDetail = {...value}
    }
  },
  actions: {
    fetchJobDetail({ commit }, payload) {
      fetch('api/JobDetail.json')
      .then(job => {
        return job.json()
      })
      .then(job => {
        return job.results.filter(data => data.jobId === payload)[0]
      })
      .then(job => {
        commit('updateJobDetail', job)
      })
      .catch(error => {
        console.log('Request failed', error)
      })
    }
  },
  getters: {
    getJobList(state) {
      return state.jobList
    },
    getJobDetail(state) {
      return state.jobDetail
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
