<template>
  <div class="">
      <div class="widget" style="margin-top: 80px">
        <h3>Мои персональные данные</h3>
        <hr style="margin-left: 300px; margin-top: -15px" width="800" size="2" color="#b3b3b3" />
          <ul>
            <li><a href="">Персональные данные</a></li>
            <li><a href="">Фото профиля</a></li>
            <li><a href="/preference">Мои предпочтения</a></li>
            <li><a href="">Надежность пользователя</a></li>
            <div class="li" v-if="!isLoaded">
<!--              <li> <router-link :to="{name: 'car'}" class="nav-link">Мой автомобиль</router-link></li>-->
              <li><a href="/car">Мой автомобиль</a></li>
            </div>
            <div class="li" v-else-if="isLoaded">
              <li> <router-link :to="{name: 'showCar'}" class="nav-link">Мой автомобиль</router-link></li>
            </div>
<!--            <li><a href="/car">Мой автомобиль</a></li>-->
            <li><a href="">Почтовый адрес</a></li>
            <li><a href="">Пароль</a></li>
          </ul>
        </div>
    <div class="container" >
        <div class="set">

                <div class="main">
                  <div class="field">
                    <a class="">Пол</a>
                    <a style="margin-top: 19px; margin-left: 250px">{{gender}}</a>
                    <br>
                  </div>
                  <div class="field">
                        <a class="">Имя </a>
                        <input style="margin-left: -20px;border: 1px solid gray" type="column" id="name" class="column"  v-model="name" placeholder=""/>
                       <br>
                  </div>
                  <div class="field">
                        <a class="">Фамилия </a>
                        <input style="border: 1px solid gray" type="column" id="surname" class="column"  v-model="surname">
                        <br><br>
                  </div>
                  <div class="field">
                        <a class="">Электронная почта </a>
                        <input style="width: 300px; border: 1px solid gray" type="column"  id="email" class="column" v-model="email">
                        <br>
                  </div>
                  <div class="field">
                        <a class="">Моб. телефон </a>
                        <input style="border: 1px solid gray" type="column" id="phone" class="column" v-model="phone">
                        <br><br><br>
                  </div>
                  <div class="field">
                        <a class="">Дата рождения </a>
                        <input  type="column" style="margin-bottom: 20px;border: 1px solid gray" id="date" class="column"  v-model="date_of_Birth">
                        <br>
                  </div>
                  <div class="field">
                        <a class="" style="margin-top: 3px">Кратко о себе </a>
                    <textarea type="column" id="" style="width: 300px; height: 150px; background-color: white;border: 1px solid gray" class="column" rows="4" v-model="inf_about_yourself" />
                    <br>
                   </div>
                  <button style="margin-left: 300px" @click="edit"> Сохранить</button>
              </div>
         </div>
      </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "Profile",


      data() {
          return {
            name: this.$store.getters.currentUser.name,
            surname: this.$store.getters.currentUser.surname,
            phone: this.$store.getters.currentUser.phone,
            date_of_Birth: this.$store.getters.currentUser.date_of_Birth,
            email: this.$store.getters.currentUser.email,
            password: this.$store.getters.currentUser.password,
            gender: this.$store.getters.currentUser.gender,
            inf_about_yourself: this.$store.getters.currentUser.inf_about_yourself,
            isLoaded: false
        }
      },
      created() {
        axios.get('http://localhost:3000/cars/:id', {
          user: this.$store.getters.currentUser.id
        })
          .then(response => {
            this.cars = response.data
            this.isLoaded = true
            console.log(this.isLoaded)
          })
          .catch(e => {
            this.errors.push(e)

          })
      },
      computed: {
        currentUser() {
          return this.$store.getters.currentUser
        },
      },
      methods: {
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
    }
</script>

<style scoped>
  * {box-sizing: border-box; margin: 0;}
  .container{
    background-color: #f2f2f2;
    margin-left: 320px;
    margin-top: -380px;
    height: 700px;
    max-width: 800px;
  }
  .set{
    margin-left: 80px;
  }
  .set a{
    margin-top: 20px;
    margin-right: 50px;
  }

  .field {clear: both; text-align:right; line-height:30px;}
 .set a {float:left; padding-right:30px;}
  .main { float: left;}

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
    color:  #424949;
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
  div[class=li] {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 1px;
    margin-bottom: 10px;
    margin-left: 4px;
    margin-top: -8px;
  }

  div[class=li] a {
    text-decoration: none;
    color:  #616a6b;
    display: inline-block;
  }

  .widget i {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  /*.widget div[class=profile-header-menu]{*/
  /* margin-top: 50px;*/
  /*  padding: 0;*/
  /*  list-style: none;*/
  /*  width: 250px;*/
  /*  border: 2px solid #f1f1f1;*/
  /*}*/
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
