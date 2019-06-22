<template>
  <nav>
    <div class="date">
      <span class="btn grey">Previous day</span>
      <span class="btn grey">Next day</span>
    </div>
    <div class="pages">
      <n-link to="/diary">Diary</n-link>
      <n-link to="/send">Send</n-link>
      <n-link to="/settings">Settings</n-link>
      <span @click='logout'>Logout</span>
    </div>
  </nav>
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch('clearCurrentUser').then(() => {
          this.$router.push("/");
        });
      });
    }
  }  
}
</script>

<style scoped>
nav {
  background: white;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
}
.date,
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  padding: 1em 1em 0 1em;
}
.date .btn {
  margin-top: 0;
}
.pages {
  padding: 2em 1em 1em;
}
.pages span {
  color: var(--theme);
  text-decoration: underline;
  cursor: pointer;
}
</style>
