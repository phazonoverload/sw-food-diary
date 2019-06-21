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
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .then(user => {
          this.user = user;
          this.authReset();
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