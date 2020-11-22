<template>
  <div class="job-list">
    <h1>This is an joblist page</h1>
    <div class="job" v-for="job in jobList" :key="job.jobId">
      <router-link :to="{ path: `/jobdetail/${job.jobId}` }">
        <div class="job-position" v-html="job.positionName"></div>
        <div class="job-company" v-html="job.companyName"></div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  .job {
    display: block;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 15px;
    transition: .3s;
    a {
      display: block;
      padding: 15px;
    }
    &:hover {
      background: #42b983;
      border-color: #42b983;
      a {
        color: #fff;
      }
    }
  }
</style>
<script>
export default {
  name: 'JobList',
  data() {
    return {
      jobList: []
    }
  },
  created() {
    const jobs = this.$store.getters.getJobList
    if (jobs.length) {
      this.jobList = this.$store.getters.getJobList
    } else {
      this.$router.push('/')
    }
  }
}
</script>