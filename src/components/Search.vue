<template>
    <div class="where_togo_area">
        <div class="container">
            <div class="row ">
                <div class="col-lg-3" >
                    <div class="form_area col-10">
                        <h3>Where you want to go?</h3>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="search_wrap">
                        <form class="search_form" action="#">
                            <div class="input_field">
                                <input type="text" placeholder="from?">
                            </div>
                          <div class="input_field">
                            <input type="text" placeholder=" to ?">
                          </div>
                            <div class="input_field">
                                <Datepicker :placeholder="'Date'"/>
                            </div>
                            <div class="input_field">
                                <select class="nice-select">
                                    <option data-display="Travel type">Travel type</option>
                                    <option value="1">Some option</option>
                                    <option value="2">Another option</option>
                                </select>
                            </div>
                            <div class="search_btn" style="margin: 10px">
                                <button class="boxed-btn4 " type="submit" >Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: 'Search',
    components: {
      Datepicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/where_to_go';
  input[type=text]{
    margin: 5px;
    padding: 10px;
  }
</style>
