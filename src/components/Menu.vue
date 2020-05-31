<template>
  <div class="widget" style="margin-top: 80px">
    <h3>Мои персональные данные</h3>
    <hr style="margin-left: 300px; margin-top: -15px" width="800" size="2" color="#b3b3b3" />
    <ul>
      <li><a href="">Персональные данные</a></li>
      <li><a href="">Фото профиля</a></li>
      <li><a href="/preference">Мои предпочтения</a></li>
      <li><a href="">Надежность пользователя</a></li>
      <li> <router-link :to="{name: 'car'}" class="nav-link">Выйти</router-link></li>
      <!--            <li><a href="/car">Мой автомобиль</a></li>-->
      <li><a href="">Почтовый адрес</a></li>
      <li><a href="">Пароль</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
  * {box-sizing: border-box; margin: 0;}
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
