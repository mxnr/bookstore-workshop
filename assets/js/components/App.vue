<template>
  <div class="customer">
    <h1>Hi!</h1>
  </div>
</template>

<script>
  export default {
    name: 'Customer',
    mounted() {
      this.$store.dispatch('fetchJWT', {
        username: 'johndoe',
        password: 'test'
      });
    }
  }
</script>

<style scoped>
</style>
