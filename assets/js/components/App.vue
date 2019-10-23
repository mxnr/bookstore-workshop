<template>
  <div class="customer">
    <login v-if="!isLoggedIn"></login>
    <div v-if="isLoggedIn">
      <h1>Hello {{ getUsername }}</h1>
      <button v-on:click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
  import Login from "./Login";
  export default {
    name: 'Customer',
    components: {
      Login
    },
    computed: {
      isLoggedIn () {
        return this.$store.state.currentJWT;
      },
      getUsername () {
        return this.$store.getters.jwtData.username
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    },
  }
</script>

<style scoped>
</style>
