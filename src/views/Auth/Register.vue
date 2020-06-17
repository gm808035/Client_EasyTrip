<template>
  <div class="container">
    <form action="#" @submit.prevent="register">
      <div class="top">
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <!-- Tabs Titles -->
<!--            <h2 class="inactive underlineHover"> Войти </h2>-->
            <h2 class="active">Регистрация </h2>
            <div class="img" style="align-items: center" >
              <img src="../../assets/img-01.png" id="icon" alt="User Icon" />
            </div>
            <!-- Login Form -->
            <input type="email" id="email" class="fadeIn second" name="email" v-model="email" placeholder="Email" required="">
            <input type="password" id="password" class="fadeIn third" name="password" v-model="password" placeholder="Пароль" required="">
            <input type="text" id="name" class="fadeIn third" name="name" v-model="name" placeholder="Имя" required="">
            <input type="text" id="surname" class="fadeIn third" name="surname" v-model="surname" placeholder="Фамилия" required="">

         <div class="row" style="margin-left: -40px">
           <div class="col-6" style="margin-left: 48px; margin-right: -40px; margin-bottom: 15px; max-width: 220px; height: 60px">
             <select type="gender" style="text-align: center" class="fadeIn third" name="gender" v-model="gender" required="">
               <option type="hidden" value="" disabled selected hidden style="text-align: center; color: gray">Пол</option>
               <option value="Мужчина">Мужчина</option>
               <option value="Женщина">Женщина</option>
             </select>
           </div>
           <div class="col-7" style="margin-left: -25px">
             <div class="" style="margin-left: 50px; max-width: 650px">
               <Datepicker id="date_of_Birth" input-class="login-input" v-model="date_of_Birth" placeholder="Дата рождения" onfocus="(this.type='date')" required="" />
             </div>
           </div>
         </div>


            <input type="text" id="phone" class="fadeIn third" name="phone" v-model="phone" placeholder="Номер телефона " required="">
            <label for="date_of_Birth"></label>
<!--            <div class="date">-->
<!--              <Datepicker input-class="fadeIn third" type="date" id="date_of_Birth" v-model="date_of_Birth" />-->
<!--          </div>-->
            <textarea type="inf" name="inf_about_yourself" id="inf_about_yourself" class="login-input" rows="4" v-model="inf_about_yourself" placeholder="Расскажите немного о себе" required=""/>
            <input type="submit" class=" fadeIn fourth " value="Зарегестрироваться">

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Забыли пароль?</a>
            </div>

          </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  import Datepicker from 'vuejs-datepicker';
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
          // smoke: 'Normal',
          // talk: 'Normal',
          // animal: 'Normal',
          // music: 'Normal',

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
            inf_about_yourself: this.inf_about_yourself,
            // smoke: 'Normal',
            // talk: 'Normal',
            // animal: 'Normal',
            // music: 'Normal',
            // user: this.$store.getters.currentUser,

          })
            .then(response => {
              this.$router.push({ name: 'login' })
            })
            // .catch(err => console.log(err.message))
        }
      },
      components: {
        Datepicker
      }
    }
</script>

<style scoped>
.container{
  margin-top: 100px;
  margin-bottom: 50px;
}

@import url('https://fonts.googleapis.com/css?family=Poppins');

/* BASIC */

html {
  /*background-color: #56baed;*/

}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
  /*overflow: auto;*/
  /*background-color: #56baed;*/
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;

}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;

}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
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

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
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

div[class=date] {
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
textarea[type=inf] {
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
input[type=password] {
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

input[type=email] {
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

input[type=date] {
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
select[type=gender] {
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

input[type=text]:placeholder {
  color: #cccccc;
}


/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

/*.fadeIn.first {*/
/*  -webkit-animation-delay: 0.4s;*/
/*  -moz-animation-delay: 0.4s;*/
/*  animation-delay: 0.4s;*/
/*  height: 200px;*/
/*  width: 50%;*/
/*  left: 100px;*/
/*  bottom: 0;*/
/*  align-items: center;*/

/*}*/

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width:60%;
}

* {
  box-sizing: border-box;
}
.img {
  height: 150px;
  width: 300px;
  margin-left: 80px;
  margin-bottom: 20px;
}
.password {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s ;
}
.top {
  margin-bottom: 125px;
  margin-top: 125px;
}
  .row{

  }
</style>

