import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDqzIvJbI38p7EF_JyzpeJGpB_ah4mpD5A",
  authDomain: "clone-17f3e.firebaseapp.com",
  databaseURL: "https://clone-17f3e.firebaseio.com",
  projectId: "clone-17f3e",
  storageBucket: "clone-17f3e.appspot.com",
  messagingSenderId: "182032315937",
  appId: "1:182032315937:web:e46b6861854b9cc50a1560",
  measurementId: "G-T6HBSS51DY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };