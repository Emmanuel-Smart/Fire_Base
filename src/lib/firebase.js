// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const API_KEY = process.env.REACT_APP_FIREBASE_KEY
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "seedemma-f45a7.firebaseapp.com",
  projectId: "seedemma-f45a7",
  storageBucket: "seedemma-f45a7.appspot.com",
  messagingSenderId: "1035083236364",
  appId: "1:1035083236364:web:35ed92a22871f9ae17da29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()