<template>
  <div>
    <h1 id='title'>Food diary.</h1>
    <h2>{{ this.date | moment('ddd Do MMM') }}</h2>
    <AddItem :date="date" :food='food' />
    <hr>
    <ListFood :food="food"/>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import moment from 'moment'
import AddItem from "~/components/AddItem";
import ListFood from "~/components/ListFood";

export default {
  middleware: 'must-be-logged-in',
  beforeCreate() {
    this.$store.dispatch('setDate', moment().format('YYYY-MM-DD'));
  },
  data() {
    return {
      days: []
    };
  },
  firestore() {
    return {
      days: db.collection('days').where('user', '==', this.currentUser.user.email)
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    food() {
      const matchingTodaysDate = this.days.filter(day => day.date == this.date)
      if(matchingTodaysDate.length > 0) return matchingTodaysDate[0].food
      else return []
    },
    date() {
      return this.$store.getters.date
    }
  },
  components: {
    AddItem,
    ListFood
  }
};
</script>

<style scoped>
h1 + h2 {
  margin: 0.5rem 0 1rem;
}
form {
  margin-bottom: 2em;
  margin-top: 2em;
}
.date {
  display: flex;
  justify-content: space-between;
}
.date .btn {
  display: inline-block;
  margin-top: 0;
  cursor: pointer;
}
</style>