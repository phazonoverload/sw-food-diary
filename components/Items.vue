<template>
  <div>
    <div class="items" v-if="items.length > 0">
      <div class="item" v-for="item in items" :key="item.key">
        <span class="desc">{{ item.desc }}</span>
        <div class="right">
          <span class="value">{{ item.points }}</span>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
    <div class="no-items" v-else>Not used</div>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style scoped>
.item {
  margin-top: 1em;
  margin-bottom: 1em;
  background: #eee;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}
.no-items {
  margin-top: 1em;
  margin-bottom: 1em;
}
.item i {
  margin-left: 0.5em;
}
</style>
