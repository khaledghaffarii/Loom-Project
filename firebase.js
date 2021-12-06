// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnR4hYPrGy3xeckO-M0SWSvhPG73sY7Jw",
  authDomain: "loom-3e960.firebaseapp.com",
  projectId: "loom-3e960",
  storageBucket: "loom-3e960.appspot.com",
  messagingSenderId: "138523309861",
  appId: "1:138523309861:web:16312d238c7811c9bd8ccc",
  measurementId: "G-W81H17B3W1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
