<template>
    <div class="slider_area">
        <div class="slider_active owl-carousel">
            <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-md-12">
                            <div class="slider_text text-center">
                                <h3 style="margin-bottom: 50px">Kyrgyzstan</h3>
                                <p >People don't take trips, trips take people.</p>
                              <router-link :to="{name: 'addTrip'}" class="boxed-btn3">Предложить поездку </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--  <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">-->
<!--    <div class="container">-->
<!--      <div class="row align-items-center">-->
<!--        <div class="col-xl-12 col-md-12">-->
<!--          <div class="slider_text text-center">-->
<!--            <h3>Australia</h3>-->
<!--            <p>Pixel perfect design with awesome contents</p>-->
<!--            <a href="#" class="boxed-btn3">Explore Now</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/slider";

</style>

