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

      this.$store.dispatch('fetchBooks', {token: this.$store.currentJWT});
    }
  }
</script>

<style scoped>
</style>
