<template>
  <div id="page">
    <h1 id='title'>Send to consultant.</h1>
    <div class="input-group" v-for='day in sortedDays' :key='day.date'>
      <input type="checkbox" name='selected-dates' v-model='selectedDates' :value='day.date' :id='day.date'>
      <label :for='day.date'>{{ day.friendly }} ({{ day.total }} points)</label>
    </div>
    <a class="btn" :href='compose' v-if='sortedDays.length > 0'>Compose email to consultant</a>
    <p v-else>Start adding items in your diary, and then you can come here to email your diary to your consultant.</p>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import moment from 'moment'

export default {
  middleware: 'must-be-logged-in',
  data() {
    return {
      days: [],
      selectedDates: []
    };
  },
  firestore() {
    return {
      days: db.collection('days').where('user', '==', this.currentUser.user.email)
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    daysWithFriendlyDate() {
      return this.days.map(day => ({
        ...day,
        friendly: moment(day.date).format('ddd Do MMM'),
        total: day.food.filter(item => item.type == "points").reduce((acc, val) => { return acc + Number(val.points) }, 0),
        dateFull: moment(day.date)
      }))
    },
    sortedDays() {
      return this.daysWithFriendlyDate.sort((a, b) => (moment(a.date) < moment(b.date)) ? 1 : -1)
    },
    fullSelectedDays() {
      return this.selectedDates.map(date => {
        const fullRecord = this.daysWithFriendlyDate.filter(fullDate => {
          return fullDate.date == date;
        })[0];
        return {
          date: fullRecord.date,
          friendly: fullRecord.friendly,
          a: fullRecord.food.filter(item => item.type == "a"),
          b: fullRecord.food.filter(item => item.type == "b"),
          points: fullRecord.food.filter(item => item.type == "points"),
          free: fullRecord.food.filter(item => item.type == "free" || item.type == "speed")
        }
      });
    },
    compose() {
      const days = this.fullSelectedDays.sort((a, b) => (moment(a.date) > moment(b.date)) ? 1 : -1);
      const space = '%0D%0A';
      let email = `Here's my food diary:${space}${space}`


      for(let day of days) {
        const totalPoints = day.points.reduce((acc, val) => { return acc + Number(val.points) }, 0);
        const freeChoices = day.free.map(f => {
          let item = f.name;
          if(f.type == 'speed') item += ' (S)'
          return item;
        })
        const aChoices = day.a.map(f => f.name);
        const bChoices = day.b.map(f => f.name);
        const pointChoices = day.points.map(f => `${f.name} (${f.points})`);

        email += `${day.friendly} (${totalPoints} points)${space}`;
        email += `Free: ${freeChoices.join(', ')}${space}`;
        email += `A: ${aChoices.join(', ')}${space}`;
        email += `B: ${bChoices.join(', ')}${space}`;
        email += `Points: ${pointChoices.join(', ')}`;
        email += space + space;
      }
      return 'mailto:?subject=Food+Diary&body=' + email;
    }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  width: auto;
  display: inline;
}
.input-group label {
  margin-left: 0.5em;
}
.btn {
  display: inline-block;
  margin-top: 1em;
}
p {
  line-height: 1.5;
}
</style>
