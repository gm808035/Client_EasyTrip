<template>
  <div class="fadeIn">
      <div class="row col-md-12">
        <div class="col-md-5">
          <h2 class="login-heading">Создание поездки</h2>
          <form action="#" @submit.prevent="addTrip">
            <label for="point_of_shipment" style="text-align: left">Точка отправки</label>
            <div class="stil">
              <select v-model="point_of_shipment"  class="login-input form-control mb-0" required="required"
                      id="point_of_shipment">
                <option v-for="city in cities" :value="city.id" :key="city.id">
                  {{city.city_name}}
                </option>
              </select>
            </div>
<!--            <div>-->
<!--              <label for="waypoints">Промежуточные точки</label>-->
<!--              <select type="text" v-model="waypoints" class="login-input form-control mb-0" multiple="true" id="waypoints">-->
<!--                <option v-for="city in cities" :value="city.attribute" :key="city.id">-->
<!--                  {{city.city_name}}-->
<!--                </option>-->
<!--              </select>-->
<!--            </div>-->

<!--            <div class="stil" >-->
              <div class="previous"
                 v-for="(waypoint, counter) in waypoints"
                 v-bind:key="counter">
              <span @click="deletePoint(counter)">x</span>
              <label for="duration" style="text-align: left">Промежуточная точка №{{counter+1}}</label>
              <select v-model="waypoint.point" class="login-input form-control mb-0" required="required" id="waypoints">
                <option v-for="city in cities" :value="city.id" :key="city.id">
                  {{city.city_name}}
                </option>
              </select>
              </div>
<!--           </div>-->
            <button class="btnAddpoint" @click="addPoint" style="color: white">+</button>

            <label for="destination" style="text-align: left">Конечная точка</label>
            <div class="stil">
                <select v-model="destination" class="login-input form-control mb-0" required="required" id="destination" @change='runGmap'>
                <option value="">Выберите город</option>
                <option v-for="(city) in cities" :value="city.id" :key="city.id">
                  {{city.city_name}}
                </option>
              </select>
            </div>

            <div class="">
              <label for="date">Дата</label>
              <Datepicker input-class="login-input" id="date" v-model="date" />
            </div>

      <div class="">
        <label for="time">time</label>
        <input type="text" name="time" id="time" class="login-input" v-model="time">
      </div>


      <div class="">
        <label for="price">Цена</label>
        <input type="number" name="price" id="price" class="login-input" v-model="price">
      </div>

      <div class="">
        <label for="amount_of_seats">Кол-во мест</label>
        <input type="number" name="amount_of_seats" id="amount_of_seats" class="login-input" v-model="amount_of_seats">
      </div>

      <div class="mb-more">
        <label for="free_seats">Свободных мест</label>
        <input type="number" name="free_seats" id="free_seats" class="login-input" v-model="free_seats">
      </div>

        <div class="mb-more">
          <button type="submit" class="btn-submit">Добавить</button>
        </div>
          </form>
        </div>
        <div class="col-md-7">
          <div id="map">
            <GmapMap
              :center="{lat:41.5, lng:74.5}"
              :zoom="6.7"
              map-type-id="roadmap"
              style="width: 100%; height: 500px"
              class="mt-3"
              ref="googleMap"
            >
              <GmapMarker
                :key="index"
                v-for="(c, index) in cities"
                :position="c.position"
                :clickable="true"
                :draggable="true"
                @click="center=c.position"
              />
            </GmapMap>
            <div id="directions-panel"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import axios from 'axios';
  import * as VueGoogleMaps from 'vue2-google-maps'
  export default {

    data() {
      return {
        driver: '',
        point_of_shipment: '',
        destination: '',
        date: '',
        time:'',
        price: '',
        amount_of_seats: '',
        free_seats: '',
        waypoints: [
          {
            point: '',
          }
        ],
        cities: [],
      }
    },
    methods: {
      addTrip() {
        this.$store.dispatch('addTrip', {
          driver: this.$store.getters.currentUser,
          point_of_shipment: this.point_of_shipment, // тут нужен  point_of_shipment.id
          destination: this.destination,
          date: this.date,
          time: this.time,
          price: parseInt(this.price),
          amount_of_seats: parseInt(this.amount_of_seats),
          free_seats: parseInt(this.free_seats),
        })
          .then((response) => {
            this.$router.push({ name: 'showTrip' })
          })
      },
      addPoint(){
        this.waypoints.push({
          previous:'',
        })
      },
      deletePoint(counter){
        this.waypoints.splice(counter,1);
      },


      AddIntermediatePoint(){

      },

      runGmap() {
        const requestOne = axios.get(`http://localhost:3000/cities/` + this.point_of_shipment);
        const requestTwo = axios.get(`http://localhost:3000/cities/` + this.destination);

        axios
          .all([requestOne, requestTwo])
          .then(
            axios.spread((...responses) => {
              getPointsAttr(responses[0].data.attribute, responses[1].data.attribute)
            })
          )
          .catch(errors => {
            console.error(errors);
          });

        const getPointsAttr = (pointAttr, destinationAttr) => {
          let directionsService = new google.maps.DirectionsService
          let directionsRenderer = new google.maps.DirectionsRenderer

          directionsRenderer.setMap(this.$refs.googleMap.$mapObject);
          this.calculateAndDisplayRoute(directionsService, directionsRenderer, pointAttr, destinationAttr);
        }
      },
      calculateAndDisplayRoute(directionsService, directionsRenderer, pointAttr, destinationAttr) {
        let waypts = [];
        let checkboxArray = document.getElementById('waypoints');
        console.log(this.waypoints)
        console.log(checkboxArray)
        for (let i = 0; i < checkboxArray.length; i++) {
          if (checkboxArray.options[i].selected) {
            waypts.push({
              location: checkboxArray[i].value,
              stopover: true
            });
          }
        }

        directionsService.route({
          origin: pointAttr,
          destination: destinationAttr,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
            let route = response.routes[0];
            let summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (let i = 0; i < route.legs.length; i++) {
              let routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' до ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
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
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      },
      google: VueGoogleMaps.gmapApi
    },
    components: {
      Datepicker
    }
  }
</script>

<style>
.fadeIn{
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 0;
}
#map {
  width: 100%;
  margin-left: 0;
}
option{
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
  height: 100px;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

select{
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
  height: 100%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
button[class=btnAddpoint]{
  font-size: 16px;
  background: rgb(64, 179, 140);
  padding: 0.4rem 1.3rem;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0px;
  font-style: inherit;
}

div[class=stil]{
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
div[class=previous]{
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
dix[class=stil]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=number] {
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
select[type=text] {
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
input[type=number]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

span{
  width: 30px;
  float: right;
  cursor: pointer;
  color: red;
}


</style>
