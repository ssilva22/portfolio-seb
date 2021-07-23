import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFW0-VDOz68-nVnUmx-BjD-ArUQ0PwBQg",
    authDomain: "portfolio-8002c.firebaseapp.com",
    projectId: "portfolio-8002c",
    storageBucket: "portfolio-8002c.appspot.com",
    messagingSenderId: "126808182759",
    appId: "1:126808182759:web:81e3c762c9107857687742",
    measurementId: "G-N3NK8PJY35"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;