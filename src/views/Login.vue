<template>
<div class="login-form">
  <h2 class="login-heading">Login</h2>
  <form action="login" @submit.prevent="login">

    <div class="form-control">
      <label for="username">Username</label>
      <input type="username" name="username" id="username" class="login-input" v-model="user.username" required="">
    </div>

    <div class="form-control mb-more">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="login-input" v-model="user.password" required="" autocomplete="new-password">
    </div>

    <div>
      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description small text-dark">Remember me on this computer</span>
      </label>
    </div>

    <button type="button" class="btn btn-success btn float-none" @click="goToRegister()">Register</button>
    <button type="submit" class="btn btn-primary btn float-right">Login</button>

  </form>
</div>


</template>

<script>
    export default {
      name: "login",
      data() {
        return {
          username: '',
          password: '',
        }
      },
      methods: {
        login: function () {
          let username = this.username
          let password = this.password
          this.$store.dispatch('login', { username, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err.message()))
        }
      }
    }
</script>

<style scoped>

</style>
