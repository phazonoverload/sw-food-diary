<template>
  <div id="items">
    <div v-if="food.length > 0">
      <div class="item" v-for="item in food" :key="item.id">
        <div class="name">{{item.name}}</div>
        <div class="points">
          <span v-if="item.type == 'speed'">(S)</span>
          <span>{{ item.points }}</span>
        </div>
        <div class="delete" @click='deleteItem(item.id)'>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
    <div v-else class="not-used">Not used</div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteItem(id) {
      this.$store.dispatch('removeItemFromDiary', { foods: this.foods, id })
    }
  },
  props: ["food", "foods"]
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5em;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.name {
  margin-right: auto;
  padding-right: 1em;
}
i {
  margin-left: 0.5em;
  color: slategrey;
  cursor: pointer;
}
.not-used {
  margin-bottom: 1em;
}
</style>