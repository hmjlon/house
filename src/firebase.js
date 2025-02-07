// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzfzzkz1x3M0x0c8XgdfpN6R_SSjqTNWg",
  authDomain: "house-f8c77.firebaseapp.com",
  projectId: "house-f8c77",
  storageBucket: "house-f8c77.firebasestorage.app",
  messagingSenderId: "765159654361",
  appId: "1:765159654361:web:cc22c890e5ba4eee418fc8",
  measurementId: "G-TXKNYPMCME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);