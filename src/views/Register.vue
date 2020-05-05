<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="row">
          <div class="col-lg-7 col-md-8 mx-auto">
            <div class="card rounded shadow shadow-sm">
              <div class="card-header">
                <h3 class="mb-0">Register</h3>
              </div>
              <div class="card-body">
                <form form class="register" @submit.prevent="register">
                  <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label text-right">Username</label>
                    <div class="col-sm-9">
                      <input id="name" type="text" class="form-control" v-model="user.name" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="surname" class="col-sm-3 col-form-label text-right">Surname</label>
                    <div class="col-sm-9">
                      <input id="surname" type="text" class="form-control" v-model="user.surname" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-3 col-form-label text-right">Phone</label>
                    <div class="col-sm-9">
                      <input id="phone" type="text" class="form-control" v-model="user.phone" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-3 col-form-label text-right">Email</label>
                    <div class="col-sm-9">
                      <input id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control" v-model="user.email" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="gender" class="col-sm-3 col-form-label text-right">Gender</label>
                    <div class="col-sm-9">
                      <input id="gender" type="text" class="form-control" v-model="user.gender" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="date_of_Birth" class="col-sm-3 col-form-label text-right">date_of_Birth</label>
                    <div class="col-sm-9">
                      <input id="date_of_Birth" type="text" class="form-control" v-model="user.date_of_Birth" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inf_about_yourself" class="col-sm-3 col-form-label text-right">inf_about_yourself</label>
                    <div class="col-sm-9">
                      <input id="inf_about_yourself" type="text" class="form-control" v-model="user.inf_about_yourself" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="new-password-text-field" class="col-sm-3 col-form-label text-right">Password</label>
                    <div class="col-sm-9">
                      <input id="new-password-text-field" type="password" class="form-control" v-model="user.password" required="" autocomplete="new-password">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg float-right" @click="register()">Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Register",
      data(){
        return {
          name : "",
          surname: "",
          phone: "",
          email: "",
          gender: "",
          date_of_Birth : "",
          inf_about_yourself : "",
          password : ""
        }
      },
      methods: {
        register: function () {
          let data = {
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            email: this.email,
            gender: this.gender,
            date_of_Birth : this.date_of_Birth,
            inf_about_yourself : this.inf_about_yourself,
            password : this.password
          }
          this.$store.dispatch('register', data)
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err.message))
        }
      }
    }
</script>

<style scoped>

</style>
