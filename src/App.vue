<template>
  <div id="app">
    <Header />
    <div class="content">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.content {
  width: 660px;
  padding: 60px 10px;
  margin: auto;
  max-width: 100%;
  flex-grow: 1;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in .3s ease-out forwards;
  transition: opacity .3s;
}
.slide-leave-active {
  animation: slide-out .3s ease-out forwards;
  transition: opacity  .3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0); 
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
