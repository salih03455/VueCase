<template>
  <div class="job-list">
    <div class="job-list-description">
      <div><span>Arama Sonuçları:</span></div>
      <span v-if="searchKey">
        <span>Pozisyon veya Şirket Adı:</span> <i>{{ searchKey }}</i>
      </span>
      <span v-if="searchLocation">
        <span>Konum:</span> <i>{{ searchLocation }}</i>
      </span>
    </div>
    <div v-if="jobList.length" class="job-list-content">
      <div class="job" v-for="job in jobList" :key="job.jobId">
        <a @click.prevent="fetchJobDetail(job.jobId)">
          <div class="job-position" v-html="job.positionName"></div>
          <div class="job-company" v-html="job.companyName"></div>
        </a>
      </div>
    </div>
    <div v-else class="job-list-empty">
      <img src="@/assets/images/empty-state.jpg" alt="Empty State">
      <span>Hiç sonuç bulunamadı...</span>
    </div>
  </div>
</template>
<style lang="scss">
  @import '@/assets/scss/variables';
  .job-list {
    &-description {
      margin-bottom: 20px;
      div {
        font-weight: 700;
        margin-bottom: 5px;
        span {
          border-bottom: 2px solid $mainColor;
        }
      }
      & > span {
        font-size: 11px;
        margin-right: 10px;
        span {
          display: inline-block;
          margin-right: 2px;
        }
        i {
          background-color: yellow;
        }
      }
    }
    &-empty {
      text-align: center;
      img {
        width: 180px;
        margin: 100px auto 30px;
      }
      span {
        font-size: 20px;
      }
    }
  }

  .job {
    display: block;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 15px;
    transition: .3s;
    a {
      display: block;
      padding: 15px;
      cursor: pointer;
    }
    &:hover {
      background: $mainColor;
      border-color: $mainColor;
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
      jobList: [],
      searchKey: '',
      searchLocation: ''
    }
  },
  created() {
    this.searchKey = this.$store.getters.getSearchKey
    this.searchLocation = this.$store.getters.getSearchLocation

    if (!this.searchKey && !this.searchLocation) {
      this.$router.push('/')
    } else {
      this.jobList = this.$store.getters.getJobList
    }
  },
  methods: {
    fetchJobDetail(jobId) {
      this.$store.dispatch('fetchJobDetail', jobId)
      this.$router.push(`/jobdetail/${jobId}`)
    }
  }
}
</script>