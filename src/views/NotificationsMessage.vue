<template>
  <div class="container">
      <div class="top" >
        <h1 style="font-weight: bold; margin-bottom: -15px">Входящие</h1>
            <h2 class="inactive underlineHover" style="margin-left: -80px; margin-top: 0px"> Сообщения </h2>
            <h2 class="active" style="margin-left: 150px">Оповещания </h2>
      </div>
        <i v-for="(notice, index) in myNotice" :key="notice.id">
          <div class="border">
          {{ notice.notification_text }}
            <button style="margin-left: -10px" @click="remove(notice, index)">x</button>
          </div>
        </i>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "NotificationsMessage",
      data() {
        return{
          myNotice: []
        }
      },
      computed: {
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
        remove(notice, index) {
          axios.delete(`http://localhost:3000/notifications/` + notice.id)
            .then(response => {
              this.$delete(this.myNotice, index)
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
      }
    }


</script>

<style scoped>
.container{
  margin-left: 590px;
}
  .top{
    max-width: 500px;
    margin-left: 30px;
    margin-bottom: 0;

  }
  .border{
    border: black;
    border-radius: 10px;
    max-width: 350px;
    height: 90px;
    margin: 10px;
    /*margin-top: -100px;*/
  }
button{
  width: 30px;
  float: right;
  cursor: pointer;

}
</style>
