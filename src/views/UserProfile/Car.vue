<template>
  <div class="">
      <div class="widget" style="margin-top: 80px">
        <h3>Информаця об автомобиле</h3>
        <hr style="margin-left: 300px; margin-top: -15px" width="800" size="2" color="#b3b3b3" />
        <ul>
          <li><a href="/profile">Персональные данные</a></li>
          <li><a href="">Фото профиля</a></li>
          <li><a href="preference">Мои предпочтения</a></li>
          <li><a href="">Надежность пользователя</a></li>
          <li><a href="/car">Мой автомобиль</a></li>
          <li><a href="">Почтовый адрес</a></li>
          <li><a href="">Пароль</a></li>
        </ul>
      </div>
<!--    <div >-->
<!--      <div  class="car">-->
<!--        <label>Страна</label>-->
<!--        <div v-for="car in cars" :key="car.id">-->
<!--          {{car.country}}-->
<!--        </div>-->
<!--        <label>Модель</label>-->

<!--        <label>Номерной знак</label>-->

<!--      </div>-->
<!--    </div>-->
     <div  class="container">
        <h2> Какие номера у машины?</h2>
       <br>
        <h6> Их увидят только ваши пассажиры.</h6>
       <div class="car">
         <label>Страна</label>
         <input type="text" style="max-width: 400px" v-model="country">
         <label>Модель</label>
         <input type="text" style="max-width: 400px" v-model="car_model">
         <label>Номерной знак</label>
         <input type="text" style="max-width: 400px" v-model="car_number">
       </div>
       <button style="margin-left: 300px" @click="addCar"> Добавить</button>
     </div>
  </div>

</template>

<script>
  import axios from "axios";

  export default {
    name: "Car",
    data() {
      return {
        car_model: '',
        country: '',
        car_number: '',
        isLoaded: false,
        cars:[]
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      },
    },
    created() {
      axios.get('http://localhost:3000/cars/:id', {
      user: this.$store.getters.currentUser.id
      })
        .then(response => {
          this.cars = response.data
          this.isLoaded = true
        })
        .catch(e => {
          this.errors.push(e)

        })
    },
    methods: {
      addCar() {
        this.$store.dispatch('addCar', {
          user: this.$store.getters.currentUser,
          car_model: this.car_model,
          country: this.country,
          car_number: this.car_number
        })
          .then((response) => {
            console.log("ok")
            this.getCar()

          })
      },
      getCar() {
        axios.get('http://localhost:3000/cars/:id', {
          user: this.$store.getters.currentUser.id
        })
          .then(response => {
            this.cars = response.data
            this.isLoaded = true
          })
          .catch(e => {
            this.errors.push(e)

          })
      },
      edit() {
        this.$store.dispatch('editProfile', {
          userId: this.$store.getters.currentUser.id,
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          date_of_Birth: this.date_of_Birth,
          inf_about_yourself: this.inf_about_yourself
        })
          .then(response => {
            console.log("ok")
          })
          .catch(err => console.log(err.message))
      }
    },
    watch:{

    }
  }
</script>

<style scoped>
  * {box-sizing: border-box; margin: 0;}
  .container{
    margin-left: 320px;
    margin-top: -380px;
    height: 700px;
    max-width: 800px;
  }
  .car{
    margin-top: 50px;
    margin-left: 200px;
  }


  .container h2 {
    color: #00004d;
    margin-left: 200px;
    margin-top: 50px;
    font-size: 23px;
  }
  .container h6 {
    color: #00004d;
    margin-left: 200px;
    /*margin-top: 50px;*/
  }

  input[type=column]{
    margin-top: 20px;
    border-radius: 10px;
    border-color: gray;
    text-align: center;
  }
  input[type=column]:focus{
    /*border-color: #007bff;*/
    /*box-shadow: #92badd ;*/
    border-color: white;
    box-shadow: 1px 1px 10px 1px #56baed;
  }
  textarea[type=column]:focus{
    /*border-color: #007bff;*/
    /*box-shadow: #92badd ;*/
    border-color: white;
    box-shadow: 1px 1px 2px 1px #56baed;
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
  .widget {
    padding: 20px;
    border: 0px solid #f1f1f1;
    background: #fff;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
  }
  .widget h3 {
    margin-bottom: 20px;
    text-align: left;
    margin-left: 300px;
    font-size: 24px;
    font-weight: normal;
    color:  gray;
  }
  .widget ul {
    margin-top: -30px;
    padding: 0;
    list-style: none;
    width: 250px;
    border: 2px solid #f1f1f1;
  }
  .widget li {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 8px;
  }
  .widget i {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  .widget div[class=profile-header-menu]{
    margin-top: 50px;
    padding: 0;
    list-style: none;
    width: 250px;
    border: 2px solid #f1f1f1;
  }
  .widget li:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 10px;

  }
  .widget a {
    text-decoration: none;
    color:  #616a6b;
    display: inline-block;
  }
  .widget li:before {
    font-family: FontAwesome;
    font-size: 20px;
    vertical-align:bottom;
    color: #dd3333;
    margin-right: 14px;
  }
  .widget li:nth-child(1):before {content:"\f007";}
  .widget li:nth-child(2):before {content:"\f16d";}
  .widget li:nth-child(3):before {content:"\f087";}
  .widget li:nth-child(4):before {content:"\f046";}
  .widget li:nth-child(5):before {content:"\f1b9";}
  .widget li:nth-child(6):before {content:"\f0d5";}
  .widget li:nth-child(7):before {content:"\f13e";}
</style>
