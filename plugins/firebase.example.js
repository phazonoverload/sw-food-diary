import Vue from 'vue';
import VueFirestore from 'vue-firestore';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

Vue.use(VueFirestore)

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth
}
