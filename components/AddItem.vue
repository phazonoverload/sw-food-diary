<template>
  <form @submit.prevent="addItem">
    <h3>Add item to diary</h3>
    <label for="name">Name of food item</label>
    <input type="text" id="name" v-model="name" required>
    <label for="points">Points</label>
    <input type="number" id="points" step="any" v-model="points" required>
    <label for="type">Type</label>
    <select v-model="type" id="type" required>
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
      name: "",
      points: 0,
      type: ""
    };
  },
  methods: {
    addItem() {
      const { date, food, name, points, type } = this;
      const user = this.$store.getters.currentUser.user.email;
      this.$store.dispatch('addItemToDiary', {
        date, food, name, points, type, user
      }).then(() => {
        this.name = '';
        this.points = 0;
        this.type = '';
      })
    },
  },
  props: ["date", "food"]
};
</script>

<style scoped>
form {
  background: #eee;
  padding: 1em;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}
form h3 {
  margin-bottom: 1rem;
}
form input[type="submit"] {
  margin-bottom: 0;
}
</style>
