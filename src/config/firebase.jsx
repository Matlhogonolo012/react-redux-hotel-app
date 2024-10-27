import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi1to0YStuWtGH2344G1pBuc0CsYFi0_A",
  authDomain: "react-redux-hotel-app.firebaseapp.com",
  projectId: "react-redux-hotel-app",
  storageBucket: "react-redux-hotel-app.appspot.com",
  messagingSenderId: "277832684083",
  appId: "1:277832684083:web:1bff6cf1fc65a2cac94946"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };