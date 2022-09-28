import firebase from "./firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXBV_LEXdClYA9d8oAEw9APXdA_vPDkBQ",
  authDomain: "tiktok-lt-clone.firebaseapp.com",
  projectId: "tiktok-lt-clone",
  storageBucket: "tiktok-lt-clone.appspot.com",
  messagingSenderId: "488658884999",
  appId: "1:488658884999:web:b28edcadc791f157375b22",
  measurementId: "G-5SRTM1F157",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
