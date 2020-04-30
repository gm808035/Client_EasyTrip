<template>
    <div class="slider_area">
        <div class="slider_active owl-carousel">
            <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-md-12">
                            <div class="slider_text text-center">
                                <h3>Kyrgyzstan</h3>
                                <p>People don't take trips, trips take people.</p>
                                <a href="#" class="boxed-btn3">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .slider_bg_2{
      background-image: url("../assets/img/banner/banner2.png");
  }
  .slider_area{
      position: relative;
      z-index: 0;
      .single_slider{
          height: 650px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          @media #{$mobile_device} {
              height: auto;
          }
          @media #{$tablet_device} {
              height: 600px;
          }
          .slider_text{
              @media #{$mobile_device}{
                 margin: 100px 0 50px 0;
              }
              h3{
              font-family: $font3;
              font-size: 150px;
              text-transform: capitalize;
              font-weight: 400;
              line-height: .5;
              color: #fff;
              margin-bottom: 0;
               @media #{$mobile_device} {
                  font-size: 50px;
              }
               @media #{$tablet_device} {
                  font-size: 94px;
              }
               @media #{$mid_device} {
                  font-size: 100px;
              }
               @media #{$large_device} {
                  font-size: 120px;
              }
              //  @media #{$mid_device} {
              //    font-size: 35px;
              // }
              }
              p{
                  font-size: 20px;
                  font-weight: 400;
                  color: #FFF;
                  margin-top: 33px;
                  margin-bottom: 49px;
               @media #{$mid_device} {
                  // font-size: 16px;
               }
               @media #{$mobile_device} {
                  font-size: 18px;
                  margin-top: 20px;
                  margin-bottom: 20px;
               }
              }
          }
      }
      .owl-carousel .owl-nav div {
          height: 120px;
          left: 0px;
          width: 50px;
          color: #fff;
          background-color: transparent;
          @include border-radius(0);
          left: 50px;
          font-size: 14px;
          border: none;
          left: 150px;
          line-height: 120px;
          background: rgba(255,255,255,.2);
          left: 0;
          border: none !important;
          &.owl-next{
              right: 0;
              left: auto;
          }
          &:hover{
              background: rgba(255,255,255,255);
              color:#001D38 ;
              border: none;
          }
      }
  }
</style>
