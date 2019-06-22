<template>
  <div id="page" :class="{authed: currentUser}">
    <div class="wrapper">
      <nuxt/>
    </div>
    <Nav id="nav" v-if='currentUser' />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
#page {
  padding-bottom: 0;
}
#page.authed {
  padding-bottom: 6em;
}
#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
