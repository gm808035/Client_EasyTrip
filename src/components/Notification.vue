<template>
  <div class="notification-block" id="notificationsDropdown">
    <!-- <div>{{notifications}}</div> -->
    <NotificationEl v-for="notification in notifications" :key="notification.id" :id="notification.id">
      {{notification.notification_text}}
    </NotificationEl>
  </div>
</template>
<script>
  import NotifocationEl from "./NotifocationEl";
  import axios from "axios";

  export default {
    name: "notification-block",
    data() {
      return{
        notifications: {}
      }
    },
    components: {
      NotifocationEl
    },
    computed: {
    },
    created() {
      axios.get(`http://localhost:3000/notifications`)
        .then(response => {
          this.notifications = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  };
</script>

<style>
  .notification-block {
    width: 360px;
    min-height: 100px;
    max-height: 300px;
    display: none;
    margin-left: -315px;
    position: fixed;
    background-color: white;
    border: 2px solid gray;
    border-radius: 00px 0px 10px 10px;
    border-top: none;
    color: black;
    overflow: auto;
    transition: max-height 0.25s ease-in;
    z-index: 10;
  }

  @media screen and (max-width: 767px) {
    .notification-block {
      width: 230px;
      right: 0;
      left: auto;
    }
  }

  @media screen and (max-width: 992px) {
    .notification-block {
      margin-left: -309px;
    }
  }
</style>


