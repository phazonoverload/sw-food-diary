import { db } from "~/plugins/firebase.js";
export const strict = false

export const state = () => ({
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
  date: '1970-01-01',
});

export const mutations = {
  setCurrentUser(vuexContext, user) {
    console.log('[mutation] setCurrentUser');
    vuexContext.currentUser = user;
  },
  clearCurrentUser(vuexContext) {
    console.log('[mutation] clearCurrentUser');
    vuexContext.currentUser = null;
  },
  setDate(vuexContext, date) {
    vuexContext.date = date;
  },
}

export const actions = {
  setCurrentUser(vuexContext, user) {
    console.log('[action] setCurrentUser');
    vuexContext.commit('setCurrentUser', user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  },
  clearCurrentUser(vuexContext) {
    console.log('[action] clearCurrentUser');
    vuexContext.commit('clearCurrentUser');
    localStorage.removeItem('currentUser');
  },
  setDate(vuexContext, date) {
    vuexContext.commit('setDate', date);
  },
  addItemToDiary(vuexContext, payload) {
    const { date, user, food, name, points, type } = payload;
    db.collection("days").doc(`${date}-${user}`).set({
      user, date,
      food: [...food, {
        name, 
        points, 
        type, 
        id: Math.floor(Date.now() / 1000) }
      ],
    }).then(() => {
        console.log("Document successfully written!");
    }).catch(error => {
        alert("Error saving item");
    });
  },
  removeItemFromDiary({ state, vuexContext }, payload) {
    const { foods, id } = payload;
    const foodsWithoutItem = foods.filter(food => food.id !== id );
    const user = state.currentUser.user.email;
    const date = state.date;
    db.collection("days").doc(`${date}-${user}`).set({
      food: foodsWithoutItem,
      user,
      date
    }).then(() => {
      console.log('Updated!');
    }).catch(() => {
      alert('Error deleting item')
    })
  }
}

export const getters = {
  currentUser(state) {
    return state.currentUser
  },
  date(state) {
    return state.date
  }
}
