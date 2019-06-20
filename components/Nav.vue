<template>
  <div id="nav">
    <div class="left">
      <i class="fas fa-chevron-left"></i>
      <span>Past</span>
    </div>
    <n-link to="/settings" class="settings">
      <i class="fas fa-cog"></i>
    </n-link>
    <div class="right">
      <span>Next</span>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<style scoped>
#nav {
  background: white;
  padding: 1em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25em;
}
#nav > * {
  flex: 1;
}
.left {
  text-align: left;
}
.left i {
  margin-right: 0.25em;
}
.settings {
  text-align: center;
  color: inherit;
}
.right {
  text-align: right;
}
.right i {
  margin-left: 0.25em;
}
</style>
