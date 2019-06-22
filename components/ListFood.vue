<template>
  <div id="record">
    <h2>A Choices</h2>
    <ListFoodSection :food="a" :foods='food'/>
    <h2>B Choices</h2>
    <ListFoodSection :food="b" :foods='food'/>
    <h2>Points ({{ totalPoints }})</h2>
    <ListFoodSection :food="points" :foods='food'/>
    <h2>Free</h2>
    <ListFoodSection :food="free" :foods='food'/>
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
      return this.points.reduce((acc, val) => { return acc + Number(val.points) }, 0);
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
