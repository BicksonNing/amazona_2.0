import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYIL9HkKs7IWH6C2YYArrhmw8X29DU2-Y",
  authDomain: "a-2-0-d5997.firebaseapp.com",
  projectId: "a-2-0-d5997",
  storageBucket: "a-2-0-d5997.appspot.com",
  messagingSenderId: "256256598976",
  appId: "1:256256598976:web:f06df7a043557848f71e25",
  measurementId: "G-XXQ5S5CXVQ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
