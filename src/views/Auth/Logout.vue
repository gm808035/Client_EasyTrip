<template>

</template>
<script>
  export default {
    created() {
      this.$store.dispatch('destroyToken')
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    }
  }
</script>

<style>

</style>
