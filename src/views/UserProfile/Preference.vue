<template>
  <div class="">
    <div class="widget" style="margin-top: 80px">
      <h3>Мои предпочтения</h3>
      <hr style="margin-left: 300px; margin-top: -15px" width="800" size="2" color="#b3b3b3" />
      <ul>
        <li><a href="/profile">Персональные данные</a></li>
        <li><a href="">Фото профиля</a></li>
        <li><a href="preference">Мои предпочтения</a></li>
        <li><a href="">Надежность пользователя</a></li>
        <div class="li" v-if="!isLoaded">
          <li> <router-link :to="{name: 'car'}" class="nav-link">Мой автомобиль</router-link></li>
        </div>
        <div class="li" v-else-if="isLoaded">
          <li> <router-link :to="{name: 'showCar'}" class="nav-link">Мой автомобиль</router-link></li>
        </div>
        <li><a href="">Почтовый адрес</a></li>
        <li><a href="">Пароль</a></li>
      </ul>
    </div>

    <div class="container">
<!--      <div class="icon" style="">-->
<!--      <label style="" > Разговорчивость:</label>-->
      <span></span>
      <br>
      <div class="row" style="margin-left: 150px; margin-top: 10px">
        <label style="margin-left: -140px" > Разговорчивость:</label>
        <div class="col-2">
          <label type="">
            <input type="radio" name="talk" value="Bad" v-model="talk" checked >
            <i type="icon" class="fa fa-comment-o fa-3x" aria-hidden="true"></i>
          </label>
        </div>
          <div class="col-2">
            <label type="">
              <input type="radio" name="talk" value="Normal" v-model="talk" >
              <i type="icon" class="fa fa-commenting-o fa-3x" aria-hidden="true"></i>
            </label>
          </div>
          <div class="col-2">
            <label type="">
              <input type="radio" name="talk" value="Good" v-model="talk" >
              <i type="icon" class="fa fa-comments-o fa-3x" aria-hidden="true"></i>
            </label>
         </div>
      </div>

      <label style="margin-top: 70px; margin-left: 10px" > Курение:</label>
      <div class="row" style="margin-left: 150px">
        <div class="col-2">
          <label type="">
            <input type="radio" name="smoke" value="Bad" v-model="smoke"  >
            <i  type="icon" class="fa fa-ban fa-3x"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="smoke" value="Normal" v-model="smoke" checked>
            <i type="icon" class="fas fa-smoking-ban  fa-3x" aria-hidden="true"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="smoke" value="Good" v-model="smoke" >
            <i type="icon" class="fas fa-smoking fa-3x" aria-hidden="true"></i>
          </label>
        </div>
      </div>

      <label style="margin-top: 70px; margin-left: 10px" > Животные:</label>
      <div class="row" style="margin-left: 150px">
        <div class="col-2">
          <label type="">
            <input type="radio" name="animal" value="Bad" v-model="animal"  >
            <i type="icon" class="fa fa-ban fa-3x"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="animal" value="Normal" v-model="animal" checked>
            <i type="icon" class="fas fa-paw  fa-3x" style="color: #5a6268" aria-hidden="true"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="animal" value="Good" v-model="animal" >
            <i type="icon"  class="fas fa-paw fa-3x" aria-hidden="true"></i>
          </label>
        </div>
      </div>

      <label style="margin-top: 70px; margin-left: 10px" > Музыка:</label>
      <div class="row" style="margin-left: 150px">
        <div class="col-2">
          <label type="">
            <input type="radio" name="music" value="Bad" v-model="music" >
            <i type="icon" class="fas fa-volume-mute fa-3x"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="music" value="Normal" v-model="music" checked>
            <i type="icon" class="fas fa-volume-down  fa-3x" aria-hidden="true"></i>
          </label>
        </div>
        <div class="col-2">
          <label type="">
            <input type="radio" name="music" value="Good" v-model="music">
            <i type="icon" class="fa fa-volume-up fa-3x" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <br>
      <button style="margin-left: 230px; margin-top: 20px" @click="editPref"> Сохранить</button>

    </div>
  </div>

</template>

<script>
  import axios from "axios";

  export default {
    name: "Car",
    data() {
      return {
        smoke: '',
        talk: '',
        animal: '',
        music: '',
        isLoaded: false
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
          console.log(this.isLoaded)
        })
        .catch(e => {
          this.errors.push(e)

        })
    },
    methods: {
      editPref() {
        this.$store.dispatch('editPref', {
          userId: this.$store.getters.currentUser.id,
          smoke: this.smoke,
          talk: this.talk,
          animal: this.animal,
          music: this.music
        })
          .then((response) => {
            console.log("ok")

          })
      },
    },
    watch:{

    }
  }
</script>

<style scoped>
  * {box-sizing: border-box; margin: 0;}
  .container{
    background-color: white;
    background-color: #f2f2f2;
    margin-left: 320px;
    margin-top: -380px;
    height: 570px;
    max-width: 800px;
    font-family: FontAwesome ;
    font-style: unset;
    font-size: 19px;
    position: static;
  }
  div[class=icon]{
    margin-top: 100px;
  }
  .row i {
    /*margin-left: 50px;*/
    margin-top: -10px;
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

  /* HIDE RADIO */
  [type=radio] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type=radio] + i {
    cursor: pointer;
    background-color: white;
    height: 60px;
    width: 70px;
    /*border: 1px solid #2196F3;*/
  }
[type=icon] {
  margin-left: 30px;
}
  /* CHECKED STYLES */
  [type=radio]:checked + i {
    outline: 3px solid #2196F3;
    background-color: white;
  }
  .row{
    margin-top: -35px;
  }
  div[class=li] {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 1px;
    margin-bottom: 10px;
    margin-left: 4px;
    margin-top: -8px;
  }

</style>
