// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxooqQPX_sd1G-0l_lk4P2ZdlJTiRVZTU",
  authDomain: "clone-fd3ed.firebaseapp.com",
  projectId: "clone-fd3ed",
  storageBucket: "clone-fd3ed.appspot.com",
  messagingSenderId: "984711689408",
  appId: "1:984711689408:web:2a4c04ac673b5cbcd76925",
  measurementId: "G-K4VFM972GD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
