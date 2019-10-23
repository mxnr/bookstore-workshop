<template>
  <div class="data">
    <input v-model="username" type="text" name="username">
    <input v-model="password" type="password" name="password">
    <button v-on:click="login">Send</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        password: '',
        username: ''
      }
    },
    name: 'Login',
    methods: {
      login() {
        this.$store.dispatch('fetchJWT', {
          username: this.username,
          password: this.password
        });
      }
    }
  }

</script>

<style scoped>
</style>
