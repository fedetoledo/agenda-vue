import firebase from 'firebase'
import 'firebase/firestore'

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
