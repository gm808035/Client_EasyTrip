<template>
  <div class="container">
    <form action="#"  @submit.prevent="searchTrip">
      <div class="top">
        <div class="wrapper">
            <h2 class="active">Куда Вы хотите отпрваиться? </h2>
          <label type="text" for="point_of_shipment" style="text-align: left" onautocomplete="this">from </label>
          <select type="text" v-model="point_of_shipment" class="login-input form-control mb-0" required="required"
                   id="point_of_shipment">
            <option v-for="city in cities" :value="city.id" :key="city.id">
              {{city.city_name}}
            </option>
          </select>

          <label type="text" for="destination" style="text-align: left">to </label>
          <select type="text" v-model="destination" class="login-input form-control mb-0" required="required" id="destination">
         <option v-for="city in cities" :value="city.id" :key="city.id">
           {{city.city_name}}
         </option>
          </select>
        <div class="row" style="margin-left: 11px; margin-right: 0">
            <div class="col-lg-6" style="margin-right: 0">
              <Datepicker input-class="login-input" id="date_of_Birth" v-model="date" />
             </div>
             <div class="col-lg-6" style="margin-left: 0">
                <input type="text" id="time" class="fadeIn third" v-model="time" name="time"  placeholder="Время">
             </div>
        </div>
          <button type="submit" class=" fadeIn fourth " value="Найти"></button>


          <hr align="center" width="1100" size="2" color="blue" />
          <div class="row">
            <div v-if="results">
              <h3>Всего найдено: {{results.length}}</h3>
              <ul v-for="result in results" :key="result.id">
                <li style="list-style: none">
                  <router-link :to="{name: 'showTrip', params: {id: result.id}}" class="nav-link">
                  <h4>Направление: {{result.point_of_shipment.city_name}} - {{result.destination.city_name}}</h4></router-link>
                </li>
              </ul>

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
              console.log(this.results)
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
  hr{
    margin-left: 0  ;
  }
</style>
