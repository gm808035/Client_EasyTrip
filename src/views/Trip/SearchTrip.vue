<template>
  <div class="container">
    <form action="#" @submit.prevent="search">
      <div class="top">
        <div class="wrapper">
            <h2 class="active">Куда Вы хотите отпрваиться? </h2>
<!--       <input type="text" id="from" class="fadeIn second" name="from" v-model="point_of_shipment" placeholder="Откуда" required="">-->
          <label type="text" for="point_of_shipment" style="text-align: left">from </label>
          <select type="text" v-model="point_of_shipment" class="login-input form-control mb-0" required="required"
                   id="point_of_shipment">
            <option v-for="city in cities" :value="city.id" :key="city.id">
              {{city.city_name}}
            </option>
          </select>

<!--          <input type="text" id="to" class="fadeIn third" name="to" v-model="destination" placeholder="Куда" required="">-->
          <label type="text" for="point_of_shipment" style="text-align: left">to </label>
          <select type="text" v-model="destination" class="login-input form-control mb-0" required="required" id="destination">
         <option v-for="city in cities" :value="city.id" :key="city.id">
           {{city.city_name}}
         </option>
          </select>
        <div class="row" style="margin-left: 11px; margin-right: 0">
            <div class="col-lg-6" style="margin-right: 0">
              <Datepicker>
                 <input type="text" id="date" name="to" v-model="date" placeholder="data" required=""/>
              </Datepicker>
             </div>
             <div class="col-lg-6" style="margin-left: 0">
                <input type="text" id="time" class="fadeIn third" v-model="time" name="time"  placeholder="Время">
             </div>
        </div>
            <input type="submit" class=" fadeIn fourth " value="Найти">

        </div>
      </div>
    </form>
  </div>
</template>

<script>
    import Datepicker from "vuejs-datepicker";
    import axios from "axios";
    export default {
        name: "SearchTrip",
      data() {
          return {
            cities: [],
            point_of_shipment: '',
            destination: '',
            date: '',
            time:'',
        }
      },
      search(){
          axios.post('http://localhost:3000/search')
        .then(response => {

          })
      },
      created() {
        axios.get(`http://localhost:3000/cities`)
          .then(response => {
            this.cities = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      components: {
        Datepicker
      }
    }
</script>

<style scoped>
  input[type=button], input[type=submit], input[type=reset]  {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

  }

  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
    background-color: #39ace7;
  }

  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type=text], select[type=text] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }
  input[type=text]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }
div[class=top]{
  margin-top: 30px;
}
  label[type=text]{
    text-align: left;
  }
</style>
