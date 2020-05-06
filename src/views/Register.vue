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
                      <input id="name" type="text" class="form-control" v-model="name" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="surname" class="col-sm-3 col-form-label text-right">Surname</label>
                    <div class="col-sm-9">
                      <input id="surname" type="text" class="form-control" v-model="surname" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-3 col-form-label text-right">Phone</label>
                    <div class="col-sm-9">
                      <input id="phone" type="text" class="form-control" v-model="phone" required="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-3 col-form-label text-right">Email</label>
                    <div class="col-sm-9">
                      <input id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control" v-model="email" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="male" class="col-sm-3 col-form-label text-right">Gender</label>
                    <div class="col-sm-9">
                      <label for="male" class="col-sm-6 col-form-label text-right">Male
                      <input type="radio" name="gender" id="male" v-model="gender" required="" value="Male" ></label>
                      <label for="female" class="col-sm-6 col-form-label ">Female
                        <input type="radio" name="gender" id="female" v-model="gender" required="" value="Female"></label>
                    </div>

                  </div>

                  <div class="form-group row">
                    <label for="date_of_Birth" class="col-sm-3 col-form-label text-right">date_of_Birth</label>
                    <div class="col-sm-9">
                      <input id="date_of_Birth" type="date" class="form-control" v-model="date_of_Birth">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inf_about_yourself" class="col-sm-3 col-form-label text-right">inf_about_yourself</label>
                    <div class="col-sm-9">
                      <input id="inf_about_yourself" type="text" class="form-control" v-model="inf_about_yourself" required="">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="new-password-text-field" class="col-sm-3 col-form-label text-right">Password</label>
                    <div class="col-sm-9">
                      <input id="new-password-text-field" type="password" class="form-control" v-model="password" required="" autocomplete="new-password">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg float-right" >Create</button>
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
          name: '',
          surname: '',
          phone: '',
          date_of_Birth: '',
          email: '',
          password: '',
          gender: '',
          inf_about_yourself: '',
        }
      },
      methods: {
        register() {
          this.$store.dispatch('register', {
            email: this.email,
            password: this.password,
            name: this.name,
            surname: this.surname,
            gender: this.gender,
            date_of_Birth: this.date_of_Birth,
            phone: this.phone,
            inf_about_yourself: this.inf_about_yourself
          })
            .then(response => {
              this.$router.push({ name: 'login' })
            })
            // .catch(err => console.log(err.message))
        }
      }
    }
</script>

<style scoped>
.container{
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
