<template>
  <div class="home">
    <div class="search">
      <span class="search-title">Arama yapmak istediginiz kelimeyi giriniz...</span>
      <form class="search-content" @submit.prevent="search">
        <input type="text" placeholder="Pozisyon veya Şirket Adı" v-model="searchKey">
        <input type="text" placeholder="Konum" v-model="searchLocation">
        <input type="submit" value="Ara">
      </form>
    </div>
    <img src="@/assets/images/jobsearch.jpg" alt="Job Search Image">
  </div>
</template>

<style lang="scss">
  .home {
    .search {
      &-title {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
      }
      &-content {
        padding: 10px 0 40px;
        display: flex;
        justify-content: space-between;
      }
    }
    img {
      border-radius: 100%;
    }
  }
  @media (max-width: 768px) {
    .search-content {
      flex-direction: column;
      input {
        width: 100%;
      margin-bottom: 10px;
      }
    }  
  }
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      searchKey: '',
      searchLocation: ''
    }
  },
  methods: {
    search() {
      // is ilani listesini getir:
      fetch('api/JobList.json')
      .then(response => {
        return response.json()
      })
      .then(response => {
        const jobList = response.result.items;
        
        if (!this.searchKey && !this.searchLocation) {
          // hicbir sey girilmemisse:
          console.log('bos birakmayiniz')
        } else if (this.searchKey && !this.searchLocation) {
          // sadece pozisyon veya sirket adi girilmisse:
          return jobList
          .filter(job => {
            return job.positionName.indexOf(this.searchKey) > -1 || job.companyName.indexOf(this.searchKey) > -1
          })
        } else if (!this.searchKey && this.searchLocation) {
          // sadece lokasyon bilgileri girilmisse:
          return jobList.filter(job => {
            return job.cityName.indexOf(this.searchLocation) > -1 || job.townName.indexOf(this.searchLocation) > -1
          })
        } else {
          // her ikisi de girilmisse:
          return jobList.filter(job => {
            return (job.positionName.indexOf(this.searchKey) > -1 || job.companyName.indexOf(this.searchKey) > -1) && (job.cityName.indexOf(this.searchLocation) > -1 || job.townName.indexOf(this.searchLocation) > -1);
          })
        }
      })
      .then(jobList => {
        return jobList.map(job => {
          if (this.searchKey && job.positionName.indexOf(this.searchKey) > -1) {
            const bold = job.positionName.replace(this.searchKey, `<b>${this.searchKey}</b>`)
            job.positionName = bold
          }
          if (this.searchKey && job.companyName.indexOf(this.searchKey) > -1) {
            const bold = job.companyName.replace(this.searchKey, `<b>${this.searchKey}</b>`)
            job.companyName = bold
          }
          if (this.searchLocation && job.cityName.indexOf(this.searchLocation) > -1) {
            const bold = job.cityName.replace(this.searchLocation, `<b>${this.searchLocation}</b>`)
            job.cityName = bold
          }
          if (this.searchLocation && job.townName.indexOf(this.searchLocation) > -1) {
            const bold = job.townName.replace(this.searchLocation, `<b>${this.searchLocation}</b>`)
            job.townName = bold
          }
          return job
        })
      })
      .then(jobList => {
        // is ilani listesini 'state'ye kaydet:
        this.$store.commit('updateJobList', jobList)
        // arama kelimelerini 'state'ye kaydet:
        this.$store.commit('updateSearchKey', this.searchKey)
        this.$store.commit('updateSearchLocation', this.searchLocation)
      }).then(() => {
        // '/joblist'e git:
        this.$router.push('/joblist')
      })
      .catch(error => {
        console.log('Request failed', error)
      })
    }
  }
}
</script>
