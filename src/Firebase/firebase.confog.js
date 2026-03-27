// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGU2VaVEOqCsbEPNnQZev28y3FADPP7n4",
  authDomain: "dragon-news-auth-router-7b168.firebaseapp.com",
  projectId: "dragon-news-auth-router-7b168",
  storageBucket: "dragon-news-auth-router-7b168.firebasestorage.app",
  messagingSenderId: "834834953707",
  appId: "1:834834953707:web:cbd959d7ca677d821e15ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;