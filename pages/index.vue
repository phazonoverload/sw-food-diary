<template>
  <div id="page">
    <div class="content">
      <h1 id="title">Food Tracker.</h1>
      <!-- <p>Record food as you eat it.</p>
      <p>Keep on top of your points.</p>
      <p>Share easily with your consultant.</p>-->
      <n-link to="/login" class="btn">Login now</n-link>
    </div>
    <div class="bottom">
      <small>
        This app is built by
        <a href="https://twitter.com/_phzn">Kevin Lewis</a> and is open source with it's code on
        <a href="#">GitHub</a>. It is not at all related to, or endorsed by, Slimming World.
      </small>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'must-be-logged-out',
}
</script>

<style scoped>
#page {
  min-height: calc(100vh - 2em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
p {
  margin: 1em 0;
}
.bottom {
  margin-top: 2em;
}
</style>
