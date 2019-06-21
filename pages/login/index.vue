<template>
  <div>
    <h1 id="title">Login.</h1>
    <form @submit.prevent="login">
      <input type="email" placeholder="Email Address" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Login">
    </form>
    <n-link to="/register">Create a new account</n-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2em;
}
</style>