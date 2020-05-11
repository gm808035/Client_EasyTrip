<template>
  <div class="container">
    <h3>trips:</h3>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">point_of_shipment</th>
        <th scope="col">destination</th>
        <th scope="col">date</th>
        <th scope="col">time</th>
        <th scope="col">price</th>
        <th scope="col">amount_of_seats</th>
        <th scope="col">free_seats</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="trip in trips" v-bind:key="trip.id">
        <th scope="row">{{trip.id}}</th>
        <td>{{trip.point_of_shipment}}</td>
        <td>{{trip.destination}}</td>
        <td>{{trip.date}}</td>
        <td>{{trip.time}}</td>
        <td>{{trip.price}}</td>
        <td>{{trip.amount_of_seats}}</td>
        <td>{{trip.free_seats}}</td>

      </tr>
      </tbody>
    </table>
  </div>


<!--  <app-input v-on: point_of_shipment="($event)"></app-input>-->
<!--  <table class="table">-->

<!--          <thead>-->
<!--          <tr>-->
<!--            <th scope="col">Id</th>-->
<!--            <th scope="col">point_of_shipment</th>-->
<!--            <th scope="col">destination</th>-->
<!--            <th scope="col">date</th>-->
<!--            <th scope="col">time</th>-->
<!--            <th scope="col">price</th>-->
<!--            <th scope="col">amount_of_seats</th>-->
<!--            <th scope="col">free_seats</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--    <tbody>-->
<!--<tr>-->
<!--  <td @point_of_shipment="$event"></td>-->
<!--  <td @destination="$event"></td>-->
<!--  <td @date="$event"></td>-->

<!--</tr>-->

<!--    </tbody>-->
<!--  </table>-->

</template>

<script>
  // import axios from 'axios'
  // export default {
  //   name: "ShowTrip",
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //       trip: {}
  //     }
  //   },
  //   created() {
  //     axios.get(`http://localhost:3000/trips`)
  //       .then(response => {
  //         this.trip = response.data
  //       })
  //       .catch(e => {
  //         this.errors.push(e)
  //       })
  //   }
  // }

  import axios from 'axios';


  export default {
    name: 'ShowTrip',
    data() {
      return {
        trips: null,
      };
    },
    created: function() {
      axios
        .get('http://localhost:3000/trips/')
        .then(res => {
          this.trips = res.data;
        })
    }
  }
</script>

<style scoped>

</style>
