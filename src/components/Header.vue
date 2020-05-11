<template>
  <div class="header">
<!--    <nav id="navigation" class="navbar navbar-dark bg-dark">-->
    <nav class="navbar navbar-expand-md">
      <router-link :to="{name: 'home'}" class="navbar-brand"><img src="src/assets/logo1.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Блог</a>
                </li>
                <li class="nav-item">
<!--                  <router-link :to="{name: 'addTrip'}">Предложить поездку </router-link>-->
                    <a class="nav-link" href="#">Добавить поездку</a>
                </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Поиск
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{name: 'cities'}" class="dropdown-item">Список городов</router-link>
                  <router-link :to="{name: 'showTrip'}" class="dropdown-item">ShowTrip</router-link>
                  <router-link :to="{name: 'map'}" class="dropdown-item">mapShow</router-link>

                </div>
              </li>
            </ul>

        </div>
          <ul class="navbar-nav" v-if="loggedIn">
            <li class="nav-item dropdown ml-auto">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                data-target="navbarDropdown"
              >
                {{currentUser.name}} {{currentUser.surname}}

              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                  <a class="dropdown-item" href="#">Профиль </a>
                <a class="dropdown-item" href="#">Ваши поездки</a>
                <a class="dropdown-item" href="#">Уведомления о поездках</a>
                <a class="dropdown-item" href="#"> Настройки</a>
                <div class="dropdown-divider"></div>
                <router-link :to="{name: 'logout'}" class="nav-link">Выйти</router-link>
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
<!--              <ul class="navbar-nav authentication">&ndash;&gt;-->
<!--                        <li class="nav-item" v-if="!loggedIn">-->
<!--                          <router-link :to="{name: 'login'}" class="nav-link">Войти</router-link>-->
<!--                        </li>-->
<!--                        <li class="nav-item" v-if="!loggedIn">-->
<!--                          <router-link :to="{name: 'register'}" class="nav-link">Регистрация</router-link>-->
<!--                        </li>-->
<!--                        <li class="nav-item" v-if="loggedIn">-->
<!--                          <router-link :to="{name: 'logout'}" class="nav-link">Выйти</router-link>-->
<!--                        </li>-->
<!--                      </ul>-->
            </ul>
            </ul>
          </div>

    </nav>

  </div>
</template>

<script>
  export default {
    name: "Header",
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      },
      currentUser() {
        return this.$store.getters.currentUser
      }
    }
  }
</script>

<style   scoped>
.navbar-light{
  color: gray;
  position: fixed;
  background: #333;
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
  /*!*-webkit-box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);*!*/
  /*-moz-box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);*/
  /*box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);*/
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
  .navbar.navbar-dark.bg-dark{
    background: white;
  }
</style>
