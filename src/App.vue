<template>
  <div id="app">
    <Header />
    <Banner />
    <Search />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Banner from './components/Banner';
  import Search from './components/Search';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      Banner,
      Search
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .boxed-btn4 {
    background: #FF4A52;
    color: #fff;
    display: inline-block;
    padding: 13px 39px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
  }

  /* line 67, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
  .boxed-btn4:hover {
    background: #1EC6B6;
    color: #fff !important;
  }

  /* line 71, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
  .boxed-btn4:focus {
    outline: none;
  }
</style>
