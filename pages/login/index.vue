<template>
  <div>
    <h1 id="title">Login.</h1>
    <form @submit.prevent="login">
      <input type="email" placeholder="Email Address" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Login">
    </form>
    <n-link to="/register">Create a new account</n-link>
    <n-link to='/forgot'>Forgot Password</n-link>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  middleware: 'must-be-logged-out',
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: async function() {
      try {
        const user = await auth.signInWithEmailAndPassword(this.email, this.password);
        await this.$store.dispatch("setCurrentUser", user);
        this.$router.push("/diary");
      } catch(error) {
        alert(error)
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2em;
}
a {
  margin-right: 1em;
}
</style>