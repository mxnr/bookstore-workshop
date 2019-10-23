<template>
  <div>
    <h1>Registration</h1>
    <input v-model="username" type="text" name="username">
    <input v-model="password" type="password" name="password">
    <button v-on:click="register">Register</button>
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
    name: 'Registration',
      methods: {
      register() {
        this.$store.dispatch('fetchRegistration', {
          username: this.username,
          password: this.password
        });
      }
    }
  }
</script>

<style scoped>
</style>
