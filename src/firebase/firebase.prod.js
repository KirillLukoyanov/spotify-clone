import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAxDU93dsEvjUvvH4If31tfhgZEOteGF9o",
  authDomain: "spotify-clone-6cd3a.firebaseapp.com",
  projectId: "spotify-clone-6cd3a",
  storageBucket: "spotify-clone-6cd3a.appspot.com",
  messagingSenderId: "602025051881",
  appId: "1:602025051881:web:ea7189466dc002f3d7d278",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export { Firebase };
