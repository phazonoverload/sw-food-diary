<template>
  <div>
    <h1 id="title">Register.</h1>
    <form @submit.prevent="register">
      <input type="email" placeholder="Email Address" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Create Account">
    </form>
    <n-link to="/login">Login to existing account</n-link>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
        console.log(user);
        this.$store.dispatch("setCurrentUser", user);
        this.$router.push("/diary");
      });
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2em;
}
</style>