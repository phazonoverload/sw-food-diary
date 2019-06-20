<template>
  <div id="nav">
    <div class="left" v-if="JSON.parse(this.showDatePicker)">
      <i class="fas fa-chevron-left"></i>
      <span>Past</span>
    </div>
    <n-link to="/record" class="record">
      <i class="fas fa-book"></i>
    </n-link>
    <n-link to="/week" class="week">
      <i class="far fa-chart-bar"></i>
    </n-link>
    <n-link to="/settings" class="settings">
      <i class="fas fa-cog"></i>
    </n-link>
    <div class="right" v-if="JSON.parse(this.showDatePicker)">
      <span>Next</span>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showDatePicker"]
};
</script>

<style scoped>
#nav {
  background: white;
  padding: 1em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: bold;
}
#nav > * {
  flex: auto;
}
.left {
  text-align: left;
}
.left i {
  margin-right: 0.25em;
}
.settings,
.week,
.record {
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
