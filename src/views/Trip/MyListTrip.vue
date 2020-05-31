<template>
  <div class="row">
        <ul>
                <div class="top"  style="margin-top: -10px">
                  <h2 class="active" style="margin-left: 650px">Ваши поездки </h2>
                </div>
          <div class="info" style="margin-top: -100px; margin-left: 150px">
          <li v-for="(trip) in myTrips" :key="trip.id">
            <router-link :to="{name: 'showTrip', params: {id: trip.id}}" class="nav-link">
      <!--        <b>{{index + 1}}: </b>-->

                 <div class="container" >
                   <div class="col-3-6">
                      <h5 style="margin-top: 20px; color: black">Основной маршрут</h5>
                     <header style="margin-left: 6px">  <b>{{trip.point_of_shipment.city_name}} -> {{trip.destination.city_name}}</b></header>
                   </div>
                <div class="col-1-6">
                    <h5 style="margin-top: 20px; color: black">Дата/время</h5>
                    <td></td>
                    <b>{{trip.date}} - {{trip.time}}</b>
                </div>
                   <div class="col-1-6">
                     <h5 style="margin-top: 20px;margin-left: 0px; color: black">Стоимость</h5>
                     <td></td>
                     <b style="margin-left: 10px">{{trip.price}} KGS </b>
                   </div>
                   <div class="col-1-6">
                     <h5 style="margin-top: 20px;margin-left: 0px; color: black">Кол-во мест</h5>
                     <td></td>
                     <b style="margin-left: 45px">{{trip.free_seats}}  </b>
                   </div>

              </div>
            </router-link>

          </li>
          </div>
        </ul>

  </div>
</template>

<script>
  import axios from 'axios'
  import Header from "../../components/Header";
  export default {
    components: {Header},
    data() {
      return {
        myTrips: []
      }
    },
    created() {
      axios.post(`http://localhost:3000/trips/myTrips/`, {
        driver: this.$store.getters.currentUser.id
      })
        .then(response => {
          this.myTrips = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
  div[class=row] {
    margin-top: 100px;
  }
  .container{
    /*border: 3px solid #fff; !* Белая рамка *!*/
    /*border-radius: 10px; !* Радиус скругления *!*/
    border-color: black;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: 100px 30px;

    -webkit-border-radius: 5px 5px 5px 5px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.1);
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.1);
    margin-bottom: 50px;
  }
  h5 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px;
    color: #cccccc;
  }
</style>
