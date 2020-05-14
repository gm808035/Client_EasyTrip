<template>
  <div class="fadeIn">
    <div class="row col-md-12">
      <div class="col-md-5">
        <h2 class="login-heading">Бронироваие поездки</h2>
        <form action="#" @submit.prevent="addTrip">
          <label for="point_of_shipment" style="text-align: left">Точка отправки</label>
          <div class="stil">
            <select  v-model="point_of_shipment" class="login-input form-control mb-0" required="required"
                     id="point_of_shipment" @change='runGmap'>
              <option v-for="city in cities" :value="city.id" :key="city.id">
                {{city.city_name}}
              </option>
            </select>
          </div>

          <div class="">
            <label for="waypoints">Промежуточные точки</label>
            <select  type="text" v-model="waypoints" class="login-input form-control mb-0" multiple="true" id="waypoints"  @change='runGmap'>
              <option v-for="city in cities" :value="city.id" :key="city.id">
                {{city.city_name}}
              </option>
            </select>
          </div>

          <label for="destination" style="text-align: left">Конечная точка</label>
          <div class="stil">
            <select v-model="destination" class="login-input form-control mb-0" required="required" id="destination" @change='runGmap' >
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
    export default {
        name: "OrderTrip"
    }
</script>

<style scoped>

</style>
