// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA4hiK2F3l0PdFXYk3iP2lxjhFuo0OnpbE",

  authDomain: "santosubito.firebaseapp.com",

  projectId: "santosubito",

  storageBucket: "santosubito.appspot.com",

  messagingSenderId: "349007644190",

  appId: "1:349007644190:web:eefb97fdc3c5826747900f",

  measurementId: "G-016GHB5NL0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);