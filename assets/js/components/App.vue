<template>
  <div class="customer">
    <login v-if="!isLoggedIn"></login>
    <hr/>
    <registration v-if="!isLoggedIn"></registration>

    <div v-if="isLoggedIn">
      <h1>Hello {{ getUsername }}</h1>
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
    name: 'Customer',
    components: {
      Login,
      Registration
    },
    created() {
      const url = new URL('http://127.0.0.1:3000/hub');
      url.searchParams.append('topic', 'http://127.0.0.1:3000/demo/books');
      const eventSource = new EventSource(url);
      eventSource.onmessage = e => {
        console.log(JSON.parse(e.data));
      }
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
