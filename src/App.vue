<template>
  <div id="app">
    <Header />
    <Banner />
    <Search />
    <TripList />
    <PlaceList />
    <Footer />
    <user />
    <test-user />
    <div id="nav">
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Banner from './components/Banner';
  import Search from './components/Search';
  import Footer from './components/Footer';
  import TripList from "./components/TripList";
  import PlaceList from "./components/PlaceList";
  import User from "./views/User"
  // import Vuex from 'vuex'
  export default {

    name: 'app',
    components: {
      PlaceList,
      TripList,
      Header,
      Footer,
      Banner,
      Search,
      User
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
