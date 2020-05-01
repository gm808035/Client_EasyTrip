<template>
  <div id="app">
    <Header />
    <Banner />
    <Search />
    <TripList />
    <PlaceList />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Banner from './components/Banner';
  import Search from './components/Search';
  import Footer from './components/Footer';
  import TripList from "./components/TripList";
  import PlaceList from "./components/PlaceList";

  export default {
    name: 'app',
    components: {
      PlaceList,
      TripList,
      Header,
      Footer,
      Banner,
      Search,
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/btn";
</style>
