<template>
  <div class="customer">
    <h1>Hi!</h1>
    <login></login>
  </div>
</template>

<script>
  import Login from "./Login";
  export default {
    name: 'Customer',
    components: {
      Login
    },
  }
</script>

<style scoped>
</style>
