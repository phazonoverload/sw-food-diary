<template>
  <div id="page">
    <div class="content">
      <h1 id="title">Today.</h1>
      <h2>2 A Choices</h2>
      <Items :items="hea"/>
      <h2>B Choice</h2>
      <Items :items="heb"/>
      <h2>Free</h2>
      <Items :items="free"/>
      <h2>Points</h2>
      <Items :items="points"/>
    </div>
    <Nav id="nav" showDatePicker="true"/>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import Items from "~/components/Items";
export default {
  data() {
    return {
      record: [
        {
          desc: "Muller Light",
          points: 1,
          type: "points",
          speed: false,
          key: Math.random()
        },
        {
          desc: "Yorkie Fruit & Nut",
          points: 8,
          type: "points",
          speed: false,
          key: Math.random()
        },
        {
          desc: "Cheese 40g",
          points: 0,
          type: "a",
          speed: false,
          key: Math.random()
        },
        {
          desc: "Apple",
          points: 0,
          type: "free",
          speed: false,
          key: Math.random()
        },
        {
          desc: "Spinach",
          points: 0,
          type: "free",
          speed: true,
          key: Math.random()
        },
        {
          desc: "Lettuce",
          points: 0,
          type: "free",
          speed: true,
          key: Math.random()
        },
        {
          desc: "Apple",
          points: 0,
          type: "free",
          speed: false,
          key: Math.random()
        },
        {
          desc: "Spinach",
          points: 0,
          type: "free",
          speed: true,
          key: Math.random()
        },
        {
          desc: "Lettuce",
          points: 0,
          type: "free",
          speed: true,
          key: Math.random()
        }
      ]
    };
  },
  methods: {
    updateRecord() {}
  },
  computed: {
    hea() {
      return this.record.filter(item => item.type == "a");
    },
    heb() {
      return this.record.filter(item => item.type == "b");
    },
    points() {
      return this.record.filter(item => item.type == "points");
    },
    free() {
      return this.record.filter(item => item.type == "free");
    },
    totalPoints() {
      return this.record.reduce((acc, item) => acc + item.points, 0);
    }
  },
  components: {
    Nav,
    Items
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
.content {
  padding-bottom: 4em;
}
h2 {
  font-size: 1.2em;
}
#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
