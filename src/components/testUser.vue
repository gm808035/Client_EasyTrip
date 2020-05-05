<template>
  <div class="container">
    <h3>Users:</h3>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Date of birth</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">Preference</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" v-bind:key="user.id">
        <th scope="row">{{user.id}}</th>
        <td>{{user.name}}</td>
        <td>{{user.surname}}</td>
        <td>{{user.date_of_Birth}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.preference}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'test',
    data() {
      return {
        users: null,
      };
    },
    created: function() {
      axios
        .get('http://localhost:3000/users')
        .then(res => {
          this.users = res.data;
        })
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
