<template>
  <div class="job-detail-wrap">
    <div class="job-detail">
      <div class="job-detail-img">
        <img :src="jobDetail.imageUrl" :alt="jobDetail.companyName">
      </div>
      <div class="job-detail-content">
        <div class="job-detail-content-position">
          {{ jobDetail.positionName }}
        </div>
        <div class="job-detail-content-company">
          {{ jobDetail.companyName }}
        </div>
        <div class="job-detail-content-table">
          <span><b>Açıklama: </b>{{ jobDetail.description }}</span>
          <span><b>İl:</b>{{ jobDetail.cityName }}</span>
          <span><b>İlçe:</b>{{ jobDetail.townName }}</span>
          <span><b>Adres:</b>{{ jobDetail.address }}</span>
          <span><b>Telefon:</b>{{ jobDetail.contactPhone.countryCallingCode }} {{ jobDetail.contactPhone.areaCode }} {{ jobDetail.contactPhone.number }}</span>
          <span><b></b></span>
        </div>
      </div>
    </div>
    <div class="job-detail-link">
      <router-link to="/joblist">Listeye Dön</router-link>
    </div>
  </div>
</template>
<style lang="scss">
  .job-detail {
    display: flex;
    &-img {
      margin-right: 20px;
    }
    &-content {
      flex-grow: 1;
      &-position {
        font-weight: 700;
      }
      &-table {
        font-size: 12px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 15px 0;
        margin: 15px 0;
        line-height: 20px;
        span {
          display: block;
        }
      }
    }
    
  }
  .job-detail-link {
    text-align: right;
  }
</style>
<script>
export default {
  name: 'JobDetail',
  data() {
    return {
      jobDetail: null,
      jobId: 0
    }
  },
  created() {
    this.jobDetail = { ...this.$store.getters.getJobDetail }
  }
}
</script>