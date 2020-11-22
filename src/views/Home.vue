<template>
  <div class="home">
    <span>Home Page</span>
    <hr>
    <!-- <map-location-selector
      :latitude="this.latitude"
      :longitude="this.longitude"
      @locationUpdated="locationUpdated">
    </map-location-selector> -->
    <div class="search">
      <input type="text" placeholder="Pozisyon veya Şirket Adı" v-model="searchKey">
      <input type="text" placeholder="Konum" v-model="searchLocation">
      <input type="button" value="Ara" @click="search">
    </div>
  </div>
</template>

<script>
// import MapLocationSelector from '../../node_modules/vue-google-maps-location-selector/src/GoogleMapsLocationSelector';

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
      .then(json => {
        const jobList = json.result.items;
        
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
      .then(jobL => {
        return jobL.map(job => {
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
      .then(jobLs => {
        // console.log('job l: ', jobL)

        // is ilani listesini 'state'ye kaydet:
        this.$store.commit('updateJobList', jobLs)
        // '/joblist'e git:
        this.$router.push('/joblist')
      })
      .catch(error => {
        console.log('Request failed', error)
      })
    },
    locationUpdated(latlng) {
      this.latitude = latlng.lat;
      this.longitude = latlng.lng;
    }
  }
}
</script>
