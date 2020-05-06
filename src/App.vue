<template>
  <div id="app">
    <Banner />
    <Search />
    <TripList />
    <PlaceList />
  </div>
</template>

<script>

  import Banner from './components/Banner';
  import Search from './components/Search';
  import TripList from "./components/TripList";
  import PlaceList from "./components/PlaceList";
  import User from "./views/User"
  // import Vuex from 'vuex'
  export default {

    name: 'app',
    components: {
      PlaceList,
      TripList,
      Banner,
      Search
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (/*resolve, reject*/) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("logout")
          }
          throw err;
        });
      });
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/btn";
</style>
