import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCScRBxt00Bg2CWOqU5gKfSfzxvsjwhpCE",
  authDomain: "react-redux-hotel-app-30d0b.firebaseapp.com",
  projectId: "react-redux-hotel-app-30d0b",
  storageBucket: "react-redux-hotel-app-30d0b.appspot.com",
  messagingSenderId: "984495412645",
  appId: "1:984495412645:web:14722413d8da0592c9844c",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
