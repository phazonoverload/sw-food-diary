<template>
  <nav>
    <div class="date" v-if='showDateSwitcher'>
      <span class="btn grey" @click='previousDate'>Previous date</span>
      <span class="btn grey" @click='nextDate'>Next date</span>
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
import moment from 'moment'

export default {
  data() {
    return {
      showDateSwitcher: true
    }
  },
  methods: {
    previousDate() {
      const newDate = moment(this.date).subtract(1, 'd').format('YYYY-MM-DD');
      this.$store.dispatch('setDate', newDate);
    },
    nextDate() {
      const newDate = moment(this.date).add(1, 'd').format('YYYY-MM-DD');
      this.$store.dispatch('setDate', newDate);
    },
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch('clearCurrentUser').then(() => {
          this.$router.push("/");
        });
      });
    }
  },
  computed: {
    date() {
      return this.$store.getters.date
    }
  },
  watch:{
    $route(to, from) {
      if(location.pathname == '/diary') {
        this.showDateSwitcher = true;
      } else {
        this.showDateSwitcher = false;
      }
    }
  } 
}
</script>

<style scoped>
nav {
  background: white;
  box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.25);
}
.date,
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  padding: 1em 1em 0;
}
.date .btn {
  margin-top: 0;
  cursor: pointer;
  font-size: 0.8em;
}
.pages {
  padding: 1em 1em 1em;
}
.pages a,
.pages span {
  color: var(--theme);
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
}
</style>
