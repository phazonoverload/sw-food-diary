<template>
  <form @submit.prevent="addItem">
    <h3>Add item to diary</h3>
    <label for="name">Name of food item</label>
    <input type="text" id="name" v-model="item.name">
    <label for="points">Points</label>
    <input type="number" id="points" v-model="item.points">
    <label for="type">Type</label>
    <select v-model="item.type" id="type">
      <option value="a">A Choice</option>
      <option value="b">B Choice</option>
      <option value="free">Free</option>
      <option value="speed">Speed</option>
      <option value="points">Points</option>
    </select>
    <input type="submit" value="Add item">
  </form>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: "",
        points: 0,
        type: ""
      }
    };
  },
  methods: {
    addItem() {}
  },
  props: ["date"]
};
</script>

<style scoped>
form h3 {
  margin-bottom: 1rem;
}
</style>
