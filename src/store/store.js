import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    currentUser(state) {
      return state.currentUser
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    retrieveUser(state, user) {
      state.currentUser = user
    },
    destroyToken(state) {
      state.token = null
      state.currentUser = null
    }
  },
  actions: {
    register(context,data){
      return new Promise((resolve, reject) => {
        axios.post('/users/',{
          email: data.email,
          password: data.password,
          name: data.name,
          surname: data.surname,
          gender: data.gender,
          date_of_Birth: data.date_of_Birth,
          phone: data.phone,
          inf_about_yourself: data.inf_about_yourself,
          waypoints: data.waypoints,
          // user: data.user,
          // smoke: data.smoke,
          // talk: data.talk,
          // animal: data.animal,
          // music: data.animal,
        })
          .then(response => {
           resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },
    editProfile(context,data){
      return new Promise((resolve, reject) => {
        axios.put('/users/:id',{
          userId: data.userId,
          email: data.email,
          password: data.password,
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          date_of_Birth: data.date_of_Birth,
          inf_about_yourself: data.inf_about_yourself,

        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },

    editPref(context,data){
      return new Promise((resolve, reject) => {
        axios.put('/preferences/:id',{
          userId: data.userId,
          smoke: data.smoke,
          talk: data.talk,
          animal: data.animal,
          music: data.music,

        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },

    addCar(context,data){
      return new Promise((resolve, reject) => {
        axios.post('/cars',{
          user: data.user,
          car_model: data.car_model,
          country: data.country,
          car_number: data.car_number

        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },
    addTrip(context, data) {
        return new Promise((resolve, reject) => {
          axios.post('/trips', {
            driver: data.driver,
            point_of_shipment: data.point_of_shipment,
            destination: data.destination,
            date: data.date,
            time: data.time,
            price: data.price,
            amount_of_seats: data.amount_of_seats,
            inf_about_trip: data.inf_about_trip,
            waypoints: data.waypoints,
          })
            .then(response => {
              resolve(response)
              console.log(data)
            })
            .catch(error => {
              reject(error)
              console.log(data)
            })
        })
      },

    addPref(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/preferences', {
          user: data.user,
          smoke: data.smoke,
          talk: data.talk,
          animal: data.animal,
          music: data.music
        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },
    addPassenger(context, data) {
      return new Promise((resolve, reject) =>{
        axios.post('/trips/order',{
          trip_id: data.trip_id,
          passenger: data.passenger
        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },
    addNotification(context,data){
      return new Promise((resolve, reject) =>{
        axios.post('/notifications',{
          notification_text: data.notification_text,
          toUser: data.toUser,
          fromUser: data.fromUser
        })
          .then(response => {
            resolve(response)
            console.log(data)
          })
          .catch(error => {
            reject(error)
            console.log(data)
          })
      })
    },


    addIntermediatePoint(context, data) {
      return new Promise((resolve, reject) => {
        axios.delete('/notifications/', {
         id: data.id
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    destroyToken(context) {
      axios.defaults.headers["Authorization"] = context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/auth/logout')
            .then(response => {
              localStorage.removeItem('token')
              localStorage.removeItem('currentUser')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('token')
              localStorage.removeItem('currentUser')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },

    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.token
            const user = response.data.user

            localStorage.setItem('token', token)
            localStorage.setItem('currentUser', JSON.stringify(user))
            context.commit('retrieveToken', token)
            context.commit('retrieveUser', user)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
})
