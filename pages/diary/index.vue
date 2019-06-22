<template>
  <div>
    <h1>Food diary.</h1>
    <h2>{{ this.date | moment('ddd Do MMM') }}</h2>
    <AddItem :date="date" :food='food' />
    <hr>
    <ListFood :food="food"/>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import AddItem from "~/components/AddItem";
import ListFood from "~/components/ListFood";

export default {
  middleware: 'must-be-logged-in',
  data() {
    return {
      date: "2019-06-22",
      days: []
    };
  },
  firestore() {
    return {
      days: db.collection('days').where('date', '==', this.date).where('user', '==', this.currentUser.user.email)
    }
  },
  methods: {
    
    removeItem() {

    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    food() {
      if(this.days.length > 0) {
        return this.days[0].food
      } else {
        return [];
      }
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