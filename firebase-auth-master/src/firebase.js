import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBGIwW4_Prlm8C29qbcXb3xop1DEZWclmk",
    authDomain: "jedi-69.firebaseapp.com",
    databaseURL: "https://jedi-69-default-rtdb.firebaseio.com",
    projectId: "jedi-69",
    storageBucket: "jedi-69.appspot.com",
    messagingSenderId: "418901800487",
    appId: "1:418901800487:web:2aa5cafc52055f784a8002",
    measurementId: "G-CTTW4FFR2M"
};

var app = 0;

// Initialize Firebase
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth();

export { app, auth, getDatabase, ref, onValue, set };
