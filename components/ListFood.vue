<template>
  <div id="record">
    <h2>A Choices</h2>
    <ListFoodSection :food="a"/>
    <h2>B Choices</h2>
    <ListFoodSection :food="b"/>
    <h2>Points</h2>
    <ListFoodSection :food="points"/>
    <h2>Free</h2>
    <ListFoodSection :food="free"/>
  </div>
</template>

<script>
import ListFoodSection from "~/components/ListFoodSection";
export default {
  props: ["food"],
  computed: {
    a() {
      return this.food.filter(item => item.type == "a");
    },
    b() {
      return this.food.filter(item => item.type == "b");
    },
    points() {
      return this.food.filter(item => item.type == "points");
    },
    free() {
      return this.food.filter(
        item => item.type == "free" || item.type == "speed"
      );
    },
    totalPoints() {
      //
    }
  },
  components: {
    ListFoodSection
  }
};
</script>

<style scoped>
h2 {
  margin: 2rem 0 1rem;
  font-size: 1.25em;
}
</style>
