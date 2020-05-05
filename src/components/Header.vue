<template>
    <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#"><img src="src/assets/logo1.png" alt=""></a>
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
<!--                <li class="nav-item dropdown">-->
<!--                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--                      Pages-->
<!--                    </a>-->
<!--                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--                        <a class="dropdown-item" href="#">Action</a>-->
<!--                        <a class="dropdown-item" href="#">Another action</a>-->
<!--                        <div class="dropdown-divider"></div>-->
<!--                        <a class="dropdown-item" href="#">Something else here</a>-->
<!--                    </div>-->
<!--                </li>-->
                <li class="nav-item">
                    <a class="nav-link" href="#">Поиск</a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">User</a>
              </li>
            </ul>

           </div>
          <ul class="navbar-nav" v-if="user!=null">
            <li class="nav-item dropdown ml-auto">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                data-target="navbarDropdown"
              >
                {{user.username}}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/ads">Профиль</a>
                <a class="dropdown-item" href="#">Ваши поездки</a>
                <a class="dropdown-item" href="#">Уведомления о поездках</a>
                <a class="dropdown-item" href="#"> Настройки</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href @click="logout">Выйти</a>
              </div>
            </li>
          </ul>
          <div v-else>
            <ul class="navbar-nav mr-auto">

              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                  <a class="nav-link" href @click="login">Войти</a>
                </button>
                <button class="btn my-2 my-sm-0" type="submit">Регистрация</button>
              </form>
<!--              <li class="nav-item">-->
<!--                &lt;!&ndash; <router-link to="/login" class="nav-link">Войти</router-link> &ndash;&gt;-->
<!--                <a class="nav-link" href="/login">Войти</a>-->
<!--              </li>-->
            </ul>
          </div>



<!--            <form class="form-inline my-2 my-lg-0">-->
<!--                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Войти</button>-->
<!--              <button class="btn my-2 my-sm-0" type="submit">Регистрация</button>-->
<!--            </form>-->
<!--        </div>-->
    </nav>


</template>

<script>

  // import {EvaIcon} from 'vue-eva-icons'
    export default {
        name: "Header"
    }
</script>

<style   scoped>
.navbar-light{
  color: white;
  position: fixed;
  background: #333;
}
.fixed-navbar{
  width: 100%;
  position: fixed;
  background: #333;
  padding: 10px 0;
  color: #fff;
}
  .nav-link{
    color:black;
  }
</style>

