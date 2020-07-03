import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyA3fzlmdFTAR9P-LoqUvtdWXkRLCWAp2W0",
  authDomain: "booksantaapp-9e359.firebaseapp.com",
  databaseURL: "https://booksantaapp-9e359.firebaseio.com",
  projectId: "booksantaapp-9e359",
  storageBucket: "booksantaapp-9e359.appspot.com",
  messagingSenderId: "970684042405",
  appId: "1:970684042405:web:e0a2eeb9994085eead514c"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();