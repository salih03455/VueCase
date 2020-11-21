<template>
  <div class="home">
    <span>Home Page</span>
    <hr>
    <!-- <map-location-selector
      :latitude="this.latitude"
      :longitude="this.longitude"
      @locationUpdated="locationUpdated">
    </map-location-selector> -->
    <hr>
    <input type="text" v-model="searchKey">
    <input type="button" value="Is Ara" @click="search">
  </div>
</template>

<script>
// import MapLocationSelector from '../../node_modules/vue-google-maps-location-selector/src/GoogleMapsLocationSelector';

export default {
  name: 'Home',
  data() {
    return {
      searchKey: '',
      apiUrl: 'https://api.indeed.com/ads/apisearch',
      publisher: '',
      latitude: 1,
      longitude: 2
    }
  },
  methods: {
    search() {
      console.log(this.searchKey);
      // is ilani listesini getir:
      fetch('api/JobList.json')
      .then(response => {
        return response.json()
      })
      .then(function(json) {
        const jobList = json.result.items;
        // is ilani listesini 'state'ye kaydet:
        
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
