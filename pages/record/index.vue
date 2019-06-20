<template>
  <div id="page">
    <div class="content">
      <h1>Today.</h1>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style scoped>
#page {
  min-height: calc(100vh - 2em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
