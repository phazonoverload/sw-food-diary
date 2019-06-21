<template>
  <div id="page">
    <div class="wrapper">
      <nuxt/>
    </div>
    <Nav id="nav"/>
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
  padding-bottom: 8em; /* reduce if logged out */
}
#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
