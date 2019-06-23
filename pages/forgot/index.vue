<template>
  <div>
    <h1 id="title">Forgot password.</h1>
    <form @submit.prevent="reset" v-if='!hasReset'>
      <input type="email" placeholder="Email Address" v-model="email">
      <input type="submit" value="Reset Password">
    </form>
    <div v-else>
      <p>Email sent. Check your inbox (and your spam)</p>
    </div>
    <n-link to="/login">Back to login</n-link>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  middleware: 'must-be-logged-out',
  data() {
    return {
      email: "",
      hasReset: false
    };
  },
  methods: {
    reset: async function() {
      try {
        auth.sendPasswordResetEmail(this.email).then(() => {
          this.hasReset = true;
        })
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
p {
  margin-bottom: 1em;
}
</style>