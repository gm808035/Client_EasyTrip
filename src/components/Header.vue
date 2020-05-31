<template>
  <div class="header">
<!--    <nav id="navigation" class="navbar navbar-dark bg-dark">-->
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link :to="{name: 'home'}" class="navbar-brand"><img src="../assets/logo1.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Блог</a>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'addTrip'}" class="nav-link">Добавить поездку</router-link>
                </li>
              <li class="nav-item">
                <router-link :to="{name: 'search'}" class="nav-link">Найти поездку</router-link>
              </li>
<!--              <li class="nav-item dropdown">-->
<!--                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--                  Поиск-->
<!--                </a>-->
<!--                <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--                  <router-link :to="{name: 'cities'}" class="dropdown-item">Список городов</router-link>-->
<!--                </div>-->
<!--              </li>-->
            </ul>

<!--          <li class="dropdown" v-if="loggedIn">-->
<!--            <button class="dropbtn" onclick="showNotifications()">-->
<!--              <i class="fa fa-bell fa-md">-->
<!--                <span class="badge badge-info" style="font-size: 15px; vertical-align: text-top">{{myNotice.length}}</span>-->
<!--              </i>-->
<!--            </button>-->
<!--            <notification />-->
<!--          </li>-->
<!--        </div>-->
          <ul class="navbar-nav" v-if="loggedIn">
            <li class="nav-item dropdown mr-auto">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                data-target="navbarDropdown"
                style="align-items: center"
              >
              <i>  {{currentUser.name}}</i>
<!--                  <span></span>-->
                    <i class="fa fa-user-circle " style=" width:30px; height:30px; position: relative; font-size: 50px; margin-top: -15px; margin-left: 10px" aria-hidden="true" ></i>
                        <i style="
                        background: red;
                        border: 1px solid white;
                        border-radius: 1000%;
                           font-size: small;
                           position: absolute;
                           top: -15px;
                           left: 107px;
                           min-width: 19px; text-align: center; color: white; font-size: 13px"
                        >  {{myNotice.length}}
                    </i>
              </a>
              <div class="dropdown-menu dropdown-menu-right" type="menu" aria-labelledby="navbarDropdown" style="max-width: 8800px">
                  <a class="dropdown-item" href="/profile" ><i class="fa fa-user-o mr-1" aria-hidden="true"></i>Профиль</a>
                  <a class="dropdown-item" href="/myTrips"><i class="fa fa-car" aria-hidden="true"></i>Ваши поездки</a>
                <a class="dropdown-item" href="/myOrders"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>Ваши бронирования</a>
                  <a class="dropdown-item" href="/notificationMessage">
                  <i class="fa fa-bell-o fa-md"></i> Уведомления о поездках {{myNotice.length}}</a>
<!--                <router-link :to="{name: 'notificationMessage'}" class="nav-link">Уведомления о поездках {{myNotice.length}}</router-link>-->
                  <a class="dropdown-item" href="#"><i class="fa fa-cog" aria-hidden="true"></i> Настройки</a>
                <div class="dropdown-divider"></div>
                 <div class="log">
                  <router-link :to="{name: 'logout'}" class="nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i>Выйти</router-link>
                </div>
              </div>
            </li>
          </ul>
          <div v-else>
            <ul class="navbar-nav mr-auto">
              <ul class="navbar-nav authentication">
              <form class="form-inline my-2 my-lg-0">
                <router-link :to="{name: 'login'}" class="nav-link">Войти</router-link>
                <router-link :to="{name: 'register'}" class="nav-link">Регистрация</router-link>
              </form>
            </ul>
            </ul>
          </div>
        </div>
    </nav>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Header",
    data() {
      return{
        myNotice: []
      }
    },
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      },
      currentUser() {
        return this.$store.getters.currentUser
      }
    },
    created() {
      axios.post(`http://localhost:3000/notifications/myNotifications/`, {
        toUser: this.$store.getters.currentUser.id
      })
        .then(response => {
          this.myNotice = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {

    }
  }
</script>

<style   scoped>

.navbar-light{
  color: gray;
  background: #333;
}
.dropdown-toggle::after {
  /*display:none;*/
margin-left: 30px;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 10;
  background: white;
  outline-color: black;
}
  .nav-link{
    color:black;
  }
.authentication a {
  color: #1EC6B6 !important;
}

.authentication a:hover {
  color: #FF4A52 !important;
}
div[class=log]{
  margin-left: 20px;
}
@media screen and (min-width: 1280px) {
  .dropbtn {
    font-size: 17px;
  }
}
div[type=menu] {
   max-width: 300px;
    height: 300px ;
  }
</style>
