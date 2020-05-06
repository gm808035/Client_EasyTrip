<template>
  <div class="header">
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
                    <a class="nav-link" href="#">Добавить поездку</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Поиск</a>
                </li>
            </ul>


          <ul class="navbar-nav" v-if="loggedIn">
            <li class="nav-item dropdown ml-auto">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                data-target="navbarDropdown"
              >
                {{user.username}}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Профиль</a>
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
</style>

<!--<template>-->
<!--  <nav class="navbar navbar-expand-md navbar-light bg-light">-->
<!--    <router-link :to="{name: 'home'}" class="navbar-brand"><img src="src/assets/logo1.png" alt=""></router-link>-->
<!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--      <span class="navbar-toggler-icon"></span>-->
<!--    </button>-->

<!--    <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--      <ul class="navbar-nav mr-auto">-->
<!--        <li class="nav-item">-->
<!--          <router-link :to="{ name: 'about' }" class="nav-link">О нас</router-link>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" href="#">Направления</a>-->
<!--        </li>-->
<!--        <li class="nav-item dropdown">-->
<!--          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--            Страницы-->
<!--          </a>-->
<!--          <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--            <a class="dropdown-item" href="#">Action</a>-->
<!--            <a class="dropdown-item" href="#">Another action</a>-->
<!--            <div class="dropdown-divider"></div>-->
<!--            <a class="dropdown-item" href="#">Something else here</a>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <router-link :to="{ name: 'contact' }" class="nav-link">Контакты</router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <ul class="navbar-nav authentication">-->
<!--        <li class="nav-item" v-if="!loggedIn">-->
<!--          <router-link :to="{name: 'login'}" class="nav-link">Войти</router-link>-->
<!--        </li>-->
<!--        <li class="nav-item" v-if="!loggedIn">-->
<!--          <router-link :to="{name: 'register'}" class="nav-link">Регистрация</router-link>-->
<!--        </li>-->
<!--        <li class="nav-item" v-if="loggedIn">-->
<!--          <router-link :to="{name: 'logout'}" class="nav-link">Выйти</router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </nav>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: "Header",-->
<!--    computed: {-->
<!--      loggedIn() {-->
<!--        return this.$store.getters.loggedIn-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->
<!--  .authentication a {-->
<!--    color: #1EC6B6 !important;-->
<!--  }-->

<!--  .authentication a:hover {-->
<!--    color: #FF4A52 !important;-->
<!--  }-->
<!--</style>-->
