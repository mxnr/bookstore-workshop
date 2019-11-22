<template>
  <div class="customer">
    <login v-if="!isLoggedIn"/>
    <hr/>
    <router-link :to="{ name: 'shops' }">View shops</router-link>
    <hr/>
    <registration v-if="!isLoggedIn"/>

    <div v-if="isLoggedIn">
      <h1>Hello {{ getUsername }}!</h1>
      <button v-on:click="loadBooks">Load books</button>
      <button v-on:click="logout">Logout</button>
      <ul v-if="getBooks.length > 0">
        <li v-for="book in getBooks">{{ book.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Login from "./Login";
  import Registration from "./Registration";

  export default {
    name: 'Home',
    components: {
      Login,
      Registration
    },
    computed: {
      isLoggedIn () {
        return this.$store.state.currentJWT;
      },
      getUsername () {
        return this.$store.getters.jwtData.username
      },
      getBooks () {
        return this.$store.state.books
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
      loadBooks() {
        this.$store.dispatch('fetchBooks');
      }
    },
  }
</script>

<style scoped>
</style>
