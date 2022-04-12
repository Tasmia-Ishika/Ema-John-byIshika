// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Cs3Bx30ypEsQfIQTTSzGgEd-mDWKN7g",
  authDomain: "ema-john-simple-original.firebaseapp.com",
  projectId: "ema-john-simple-original",
  storageBucket: "ema-john-simple-original.appspot.com",
  messagingSenderId: "799947086909",
  appId: "1:799947086909:web:41895d33bd3f57c2e75e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;