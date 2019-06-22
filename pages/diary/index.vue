<template>
  <div>
    <h1>Food diary.</h1>
    <h2>Fri 21st June 2019</h2>
    <AddItem :date="date"/>
    <hr>
    <ListFood :food="food"/>
  </div>
</template>

<script>
import AddItem from "~/components/AddItem";
import ListFood from "~/components/ListFood";
export default {
  middleware: 'must-be-logged-in',
  data() {
    return {
      date: "2019-06-21",
      food: [
        {
          name: "Muller Light",
          points: 1,
          type: "points"
        },
        {
          name: "Broccoli",
          points: 0,
          type: "speed"
        },
        {
          name: "5% Mince",
          points: 0,
          type: "free"
        },
        {
          name: "40g Lighter Cheddar",
          points: 0,
          type: "a"
        },
        {
          name: "Kitkat",
          points: 9,
          type: "points"
        }
      ]
    };
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