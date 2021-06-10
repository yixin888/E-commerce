import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAd-_h_z02_juZ4Thaqxoz7sbMXojloEHA",
    authDomain: "challenge-8038d.firebaseapp.com",
    projectId: "challenge-8038d",
    storageBucket: "challenge-8038d.appspot.com",
    messagingSenderId: "344995724147",
    appId: "1:344995724147:web:490380939df476ee61e306",
    measurementId: "G-KHSZLJWXTT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };