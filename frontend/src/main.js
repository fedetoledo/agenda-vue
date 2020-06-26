import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import {store} from './store/deprecated-store';
import store from './store/'
import './assets/css/global.css'
import router from './router/index'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBU4Ej79r6XFc7_RfTrkm48BWAzqES-yZk",
  authDomain: "todo-app-8bfd0.firebaseapp.com",
  databaseURL: "https://todo-app-8bfd0.firebaseio.com",
  projectId: "todo-app-8bfd0",
  storageBucket: "todo-app-8bfd0.appspot.com",
  messagingSenderId: "794391387546",
  appId: "1:794391387546:web:5f4694544a6c72cb096e23"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
  console.log(user)
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
