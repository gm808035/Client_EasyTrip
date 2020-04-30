<template>
    <div class="where_togo_area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="form_area">
                        <h3>Where you want to go?</h3>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="search_wrap">
                        <form class="search_form" action="#">
                            <div class="input_field">
                                <input type="text" placeholder="Where to go?">
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
                            <div class="search_btn">
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
  .where_togo_area{
    background: #040E27;
    padding: 50px 0;
    .form_area{
        h3{
            font-size: 24px;
            color: #fff;
            font-weight: 400;
            margin-bottom: 0;
            @media #{$mobile_device}{
                margin-bottom: 15px;
            }
            @media #{$tablet_device}{
                margin-bottom: 30px;
            }
            @media #{$mid_device}{
               font-size: 18px;
            }
        }
    }
    .search_wrap{
        .search_form{
            @include flexbox();
            @include justify-content(space-between);
            @media #{$mobile_device}{
                display: block !important;
            }
        }
        .input_field{
           width: 220px;
           @media #{$tablet_device}{
            max-width: 150px;
           }
           @media #{$mid_device}{
            max-width: 170px;
           }
            @media #{$mobile_device}{
                width: 100%;
                margin-bottom: 15px;
            }
            input{
                width: 100%;
                height: 50px;
                background: transparent;
                border: 1px solid #363E52;
                padding-left: 15px;
                @include border-radius(5px);
                color: #fff;
                &::placeholder{
                    font-size: 16px;
                    color: #AAB1B7;
                    font-weight: 300;

                }
                &:focus{
                    outline: none;
                }
            }
            .nice-select {
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                color: #AAB1B7;
                font-weight: 300;
                background: transparent;
                border: 1px solid #363E52;
                @media #{$mobile_device}{
                    margin-bottom: 15px;
                }
                &::after {
                    content: '\f0d7 ';
                    right: 21px;
                    top: 5px;
                    font-family: 'fontawesome';
                    color: #AAB1B7;
                    font-size: 16px;
                }
                .option {
                    cursor: pointer;
                    font-weight: 400;
                    line-height: 40px;
                    list-style: none;
                    min-height: 40px;
                    outline: none;
                    padding-left: 18px;
                    padding-right: 29px;
                    text-align: left;
                    -webkit-transition: all 0.2s;
                    transition: all 0.2s;
                    color: #000;
                    font-weight: 400;
                }
                &.open .list {
                    width: 100%;
                }
            }
        }
    }

  }

  .gj-datepicker-md [role="right-icon"] {
      position: absolute;
      right: 0px;
      top: 0px;
      font-size: 16px;
      color: #919191;
      margin-right: 15px;
      position: absolute;
      top: 16px;
      right: 10px;
      color: #AAB1B7;
  }
  .gj-picker-md div[role="navigator"] {
      padding-left: 30px !important;
  }
</style>
