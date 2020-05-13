<template>
  <div class="row">
  <div v-if="isLoaded">
    <h4>Направление: {{trip.point_of_shipment.city_name}} - {{trip.destination.city_name}}</h4>
    <p>Дата: {{trip.date}}</p>
    <p>Время: {{trip.time}}</p>
    <p>Цена: {{trip.price}}</p>
    <p>Всего мест: {{trip.amount_of_seats}}</p>
    <p>Свободных мест: {{trip.free_seats}}</p>
  </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ShowTrip",
    data() {
      return {
        id: this.$route.params.id,
        trip: {},
        isLoaded: false
      }
    },
    methods:{

    },
    created() {
      axios.get(`http://localhost:3000/trips/` + this.id)
        .then(response => {
          this.trip = response.data
          this.isLoaded = true
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style scoped>

  div[class=row] {
    margin-top: 100px;
    margin-left: 50px;
  }
</style>
