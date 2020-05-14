<template>
  <div class="container">
    <form action="#"  @submit.prevent="searchTrip">
      <div class="top">
        <div class="wrapper">
            <h2 class="active" style="margin-top: 55px">Куда Вы хотите отпрваиться? </h2>
          <select type="text" v-model="point_of_shipment" class="login-input form-control mb-0" required="required" id="point_of_shipment">
            <option type="hidden" value="" disabled selected hidden style="text-align: center">Откуда</option>
            <option v-for="city in cities" :value="city.id" :key="city.id"> {{city.city_name}} </option>
          </select>
          <select type="text" v-model="destination" class="login-input form-control mb-0" required="required" id="destination">
           <option type="hidden" value="" disabled selected hidden style="color: #5a6268">Куда</option>
           <option v-for="city in cities" :value="city.id" :key="city.id"> {{city.city_name}} </option>
          </select>
        <div class="row" style="margin-left: 11px; margin-right: 0">
            <div class="col-lg-6" style="margin-right: 0">
                <Datepicker input-class="login-input" v-model="date" placeholder="Дата" onfocus="(this.type='date')"  />
            </div>
            <div class="col-lg-6" style="margin-left: 0">
                <input type="text" id="time" class="fadeIn third" v-model="time" name="time"  placeholder="Время">
            </div>
        </div>
          <button type="submit" class=" fadeIn fourth " value="Найти">Найти</button>

         <div class="row">
           <div v-if = isLoaded>
            <div v-if="results">
              <div class="titleserach" style="background-color: #E2F6F7; height: 50px">
                <h3 style="color: #164C4F; font-family: serif; margin-top: 5px;font-size: 25px">По результатам поиска найдено {{results.length}} поездки</h3>
              </div>
              <ul v-for="result in results" :key="result.id">
                <li style="list-style: none">
                  <router-link :to="{name: 'showTrip', params: {id: result.id}}" class="nav-link">
                    <div class="poisk">
                      <div class="col-3-6">
                        <h5 type="title" style="margin-top: 10px">Основной маршрут</h5>
                        <header style="margin-left: 6px; color: #56baed">  <b>{{result.point_of_shipment.city_name}} - {{result.destination.city_name}}</b></header>
                      </div>
                      <div class="col-1-6">
                        <h5 type="title" style="margin-top: 10px">Дата</h5>
                        <td></td>
                        <b style="color: #56baed">{{result.date}} - {{result.time}}</b>
                      </div>
                      <div class="col-1-6">
                        <h5 type="title" style="margin-top: 10px">Стоимость</h5>
                        <td></td>
                        <b style="color: #56baed">{{result.price}} KGS </b>
                      </div>
                      <div class="col-1-6">
                        <h5 type="title" style="margin-top: 10px">Свободных мест</h5>
                        <td></td>
                        <b style="color: #56baed">{{result.free_seats}}  </b>
                      </div>
                    </div>

                  </router-link>

                </li>
              </ul>
            </div>
          </div>
         </div>
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
            results: [],
            isLoaded: false
        }
      },
      methods: {
        searchTrip() {
          axios.post('http://localhost:3000/trips/search', {
            headers: { 'Content-Type': 'application/json' },
            point_of_shipment: this.point_of_shipment,
            destination: this.destination,
            date: this.date,
            time: this.time
          })
            .then(response => {
              this.results = response.data
              this.isLoaded = true
            })
            .catch(e => {
              this.errors.push(e)

            })
        },
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
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    text-align: center;

  }
  button[type=button], button[type=submit], button[type=reset]  {
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

  button[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
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
  option[class=hidden] {
    color: #5a6268;
  }
div[class=top]{
  margin-top: 30px;
}
  label[type=text]{
    text-align: left;
  }
  hr{
    margin-left: 0  ;
  }
  div[class=poisk]{
       border: 3px solid #fff; /* Белая рамка */
       border-radius: 10px; /* Радиус скругления */
       display: grid;
       grid-template-columns: 200px 300px 200px 200px;
       grid-template-rows: 100px 30px;

       -webkit-border-radius: 5px 5px 5px 5px;
       /*-webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.1);*/
       box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1);
       margin-top: 0px;
       margin-left: 250px;
       width: 900px;
       color: black;
     }
  h5[type=title] {
    color: black;
  }
  div[class=titleserach]{
    border: 3px solid #fff; /* Белая рамка */
    border-radius: 10px; /* Радиус скругления */
    -webkit-border-radius: 5px 5px 5px 5px;
    margin-top: 0px;
    width: 1500px;
    color: black;
  }
</style>
