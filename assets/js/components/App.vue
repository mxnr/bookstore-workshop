<template>
  <div class="customer">
    <h1>Hi!</h1>
    <button v-on:click="loadBooks">Load books</button>
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
    },
    methods: {
      loadBooks() {
        this.$store.dispatch('fetchBooks');
      }
    }
  }
</script>

<style scoped>
</style>
