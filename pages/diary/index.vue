<template>
  <div>
    <h1>Food diary.</h1>
    <h2>Fri 21st June 2019</h2>
    <AddItem :date="date"/>
    <hr>
    <!-- LIST ITEMS -->
  </div>
</template>

<script>
import AddItem from "~/components/AddItem";
export default {
  data() {
    return {
      date: "2019-06-21"
    };
  },
  components: {
    AddItem
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