<template>
  <div id="page">
    <div class="content">
      <h1 id="title">Food Tracker.</h1>
      <p>Track your food on the go and email your food diary to your consultant.</p>
      <n-link to="/login" class="btn">Login now</n-link>
    </div>
    <div class="bottom">
      <small>
        This app is built by
        <a href="https://twitter.com/_phzn" target="_blank">Kevin Lewis</a> and is open source with it's code on
        <a href="https://github.com/phazonoverload/sw-food-diary" target="_blank">GitHub</a>. It is not at all related to, or endorsed by, Slimming World. This costs money and time to run, so if you are able to I'd appreciate a small <a href="https://monzo.me/kev" target="_blank">donation</a>.
      </small>
      <small>
        You can add this website to your homescreen and access it like an app!
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
h1#title {
  margin-bottom: 1em;
}
p {
  margin-bottom: 1em;
  line-height: 1.5;
}
.btn {
  margin-top: 1em;
  display: inline-block;
}
.bottom {
  margin-top: 2.5em;
}
small {
  display: block;
  margin-bottom: 1em;
}
</style>
