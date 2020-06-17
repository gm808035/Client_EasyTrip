<template>
  <div class="row col-md-12">
    <div class="col-md-5">
       <div class="row">
         <div v-if="isLoaded">
           <h3 style="color: #00004d">План поездки</h3>
           <flash-message class="myCustomClass"></flash-message>
           <hr style="margin-left: 0px; margin-top: 2px" width="500" size="2" color="#b3b3b3" />
           <p style="font-family: FontAwesome; font-size: 25px; color: #00004d; margin-top: -9px "> {{trip.date}}</p>
               <p style="font-size: 19px; margin-top: -15px">{{trip.time}}</p>

                   <ul class="metro">
                   <li><a href="">{{trip.point_of_shipment.city_name}}</a>
<!--                                    <ul>-->
<!--                                      <li><a href="">Элемент вложенного списка</a></li>-->
<!--                                      <li><a href="">Элемент вложенного списка</a></li>-->
<!--                                      <li><a href="">Элемент вложенного списка</a></li>-->
<!--                                    </ul>-->
                   </li>
                   <li><a href="">{{trip.destination.city_name}}</a></li>
                 </ul>

            <p style=" margin-top: 15px; font-size: 15px">Стоимость:  </p>
           <label style="margin: -44px 0 0 150px; font-size: 20px; color: #00004d">{{trip.price}}  KGS</label>
            <p>Свободных мест:</p>
           <label style="margin: -44px 0 0 150px; font-size: 20px; color: #00004d">{{trip.free_seats}}</label>
           <p style="margin-top: 15px">Дополнительная информация о поездке:</p>
           <textarea style="margin-top: -15px; font-size: 16px; color: #00004d; max-width: 550px; height: 90px "> {{trip.inf_about_trip}} </textarea>

           <hr style="margin-left: 0px; margin-top: 2px" width="500" size="2" color="#b3b3b3" />

           <h2 style="">Информация о водителе</h2>
               <p style=" margin-top: 15px; font-size: 15px">Имя:  </p>
               <label style="margin: -44px 0 0 150px; font-size: 20px; color: #00004d">{{trip.driver.name}} {{trip.driver.surname}}</label>

           <p style=" margin-top: 15px; font-size: 15px">Пол:  </p>
           <label style="margin: -44px 0 0 150px; font-size: 18px; color: #00004d">{{trip.driver.gender}}</label>
           <h2 style=" margin-top: 10px">Предпочтения водителя</h2>
           <div v-for="preference in preferences" :key="preference.id">
             <label style="margin-top: 10px">Общительность: </label>
             <div style="margin-left: 150px; margin-top: -27px" v-if="preference.talk === 'Bad'">
               <a>Люблю молчать</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.talk === 'Normal'">
               <a>Могу поболтать, если есть настроение</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.talk === 'Good'">
               <a>Люблю поболтать</a>
             </div>
             <label style="">Курение: </label>
             <div style="margin-left: 150px; margin-top: -27px" v-if="preference.smoke === 'Bad'">
               <a>В машине не курить</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.smoke === 'Normal'">
               <a>Иногда я разрешаю курить</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.smoke === 'Good'">
               <a>Курение сигарет меня не беспокоит</a>
             </div>
             <label style="">Животные: </label>
             <div style="margin-left: 150px; margin-top: -27px" v-if="preference.animal === 'Bad'">
               <a>Без животных</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.animal === 'Normal'">
               <a>В зависимости от животного, могу взять в машину</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.animal === 'Good'">
               <a>Можно с животными</a>
             </div>
             <label style="">Музыка: </label>
             <div  style="margin-left: 150px; margin-top: -27px" v-if="preference.music === 'Bad'">
               <a>Предпочитаю тишину</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.music === 'Normal'">
               <a>Я слушаю музыку когда есть настроение</a>
             </div>
             <div style="margin-left: 150px; margin-top: -27px" v-else-if="preference.music === 'Good'">
               <a>Музыка non-stop </a>
             </div>

           </div>
           <h2 style=" margin-top: 10px; margin-bottom: 10px">Информация о авто</h2>
           <div v-for="car in carInf" :key="car.id">-->
             {{car.car_model}}
             {{car.car_number}}
           </div>
<!--           <p style=" margin-top: 15px; font-size: 15px">Модель:  </p>-->
<!--           <label style="margin: -44px 0 0 150px; font-size: 16px; color: #00004d">bmw</label>-->
<!--           <p style=" margin-top: 15px; font-size: 15px">Номер:  </p>-->
<!--           <label style="margin: -44px 0 0 150px; font-size: 18px; color: #00004d">9488</label>-->

           <h2 style=" margin-top: 10px; margin-bottom: 10px">Пассажиры</h2>
           <p style=" margin-top: 15px; font-size: 15px">Имя:  </p>
           <label style="margin: -44px 0 0 150px; font-size: 18px; color: #00004d">Кадырова Алтынай</label>
           <p style=" margin-top: 15px; font-size: 15px">Пол:  </p>
           <label style="margin: -44px 0 0 150px; font-size: 18px; color: #00004d">{{trip.driver.gender}}</label>

           <hr style="margin-left: 0px; margin-top: 2px" width="500" size="2" color="#b3b3b3" />
<!--           <div v-for="pass in passInf" :key="pass.id">-->
<!--             {{pass.passenger.name}}-->
<!--           </div>-->


           <button style="margin-left: 230px; margin-top: 20px" @click="addPassenger" :disabled=isFull> Забронировать</button>
<!--            <button @click="addPassenger" :disabled=isFull> Order</button>-->
         </div>
       </div>
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
</template>

<script>
  import axios from 'axios'
  import * as VueGoogleMaps from 'vue2-google-maps'
  export default {
    name: "ShowTrip",
    data() {
      return {
        id: this.$route.params.id,
        trip: {},
        preferences: {},
        isLoaded: false,
        passenger: '',
        trip_id: '',
        cities: [],
        userInf: [],
        passInf: [],
        carInf: []
      }
    },
    methods:{
      addPassenger() {
        this.$store.dispatch('addPassenger', {
          trip_id: this.$route.params.id,
          passenger: this.$store.getters.currentUser,
        })
          .then((response) => {
            this.$router.push({ name: 'myTrips' });
          })
          .catch(error => {
            // this.errors.push(e)
            if(error.response.status == 201) {
              this.flashSuccess("Вы успешно забронировали себе место!")
            }
          })
        this.$store.dispatch('addNotification', {
          notification_text: this.$store.getters.currentUser.name  + this.$store.getters.currentUser.surname + ' Забронровал(а) одно место на поездку',
          toUser: this.trip.driver,
          fromUser: this.$store.getters.currentUser,
        })
          .then((response) => {
            this.$router.push({ name: 'myTrips' })
          })
          .catch(e => {
            this.errors.push(e)

          })
      },


      runGmap() {
        const waypointsIds = axios.post(`http://localhost:3000/cities/waypoints/byIds`, {
          waypoints: this.trip.waypoints
        });
        axios.all([waypointsIds])
          .then(
            axios.spread((...responses) => {
              getPointsAttr(responses[0].data)
            })
          )
          .catch(errors => {
            console.error(errors);
          });
        const getPointsAttr = (waypointsAttr) => {
          let directionsService = new google.maps.DirectionsService
          let directionsRenderer = new google.maps.DirectionsRenderer
          directionsRenderer.setMap(this.$refs.googleMap.$mapObject);
          this.calculateAndDisplayRoute(directionsService, directionsRenderer, waypointsAttr);
        }
      },
      calculateAndDisplayRoute(directionsService, directionsRenderer, waypointsAttr) {
        let waypts = [];
        for (let i = 0; i < waypointsAttr.length; i++) {
          waypts.push({
            location: waypointsAttr[i],
            stopover: true
          });
        }
        directionsService.route({
          origin: this.trip.point_of_shipment.attribute,
          destination: this.trip.destination.attribute,
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
              summaryPanel.innerHTML += '<b>Отрезок дороги: ' + routeSegment +
                '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' до ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            console.log('Directions request failed due to ' + status);
          }
        });
      }
    },
    computed: {
      google: VueGoogleMaps.gmapApi,
      isFull() {
        return this.trip.free_seats <= 0
      }
    },
    mounted() {
      window.addEventListener('load', () => {
        this.runGmap();
      })

    },
    created() {
      axios.get(`http://localhost:3000/trips/` + this.id)
        .then(response => {
          this.trip = response.data
          this.isLoaded = true
          // this.cities.push(this.trip.point_of_shipment.attribute)
          // this.cities.push(this.trip.destination.attribute)
        })
        .catch(e => {
          this.errors.push(e)
        }) ,

      axios.get(`http://localhost:3000/preferences/:id`,{
        user:  this.$store.getters.currentUser.id,
      })
        .then(response => {
          this.preferences = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })

      axios.get(`http://localhost:3000/passengers/myPassengers/`,{
        tripIdInf:  this.trip.id
      })
        .then(response => {
          this.passInf = response.data
          // console.log(response.data)
          // console.log(this.trip.id)
          // console.log("this.trip.id")
        })
        .catch(e => {
          this.errors.push(e)
        })

      axios.get(`http://localhost:3000/cars/myCars/userCar`,{
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Content-Length' :
        // },
        carUser: this.$store.getters.currentUser.id
      })
        .then(response => {
          this.carInf = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>

<style scoped>
  .metro {
    list-style: none;
    padding: 0;
    margin: 0px 0px 0 0px;
    border-left: 5px solid #DAE4F1;

  }
  .metro li {line-height: 2em;}
  .metro ul {
    margin: 20px 0 20px 15px;
    padding: 0;
    border: none;
    list-style: none;
  }
  .metro ul:before, .metro ul:after {
    content: "";
    width: 5px;
    height: 28px;
    background: #DAE4F1;
    position: relative;
    display: block;
    left: -9px;
  }
  .metro ul:before {
    transform: rotate(-45deg);
    margin-top: -15px;
  }
  .metro ul:after {
    transform: rotate(45deg);
    bottom: -20px;
  }
  .metro ul li {border-left: 5px solid #DAE4F1;}
  .metro ul li:first-child {
    margin-top: -5px;
    padding-top: 5px;
  }
  .metro ul li:last-child {
    padding-bottom: 9px;
    margin-bottom: -25px;
  }
  .metro a {
    text-decoration: none;
    display: block;
    /*font-family: FontAwesome;*/
    color: #4A4B4D;
    font-size: 23px;
    color: #00004d ;
  }
  .metro a:before {
    content: "";
    display: inline-block;
    background: #56baed;
    width: 12px;
    height: 12px;
    left: -9px;
    position: relative;
    border-radius: 50%;
    margin-right: .5em;
  }
  div[class=row] {
    margin-top: 100px;
    margin-left: 50px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 0px 10px 10px 80px;
    color: #cccccc;
  }

  button{
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
</style>
