// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtJ1pxCXkwRh7F6-CGk0IQSIz93nCex3g",
  authDomain: "prn-website-e20a1.firebaseapp.com",
  databaseURL: "https://prn-website-e20a1-default-rtdb.firebaseio.com",
  projectId: "prn-website-e20a1",
  storageBucket: "prn-website-e20a1.firebasestorage.app",
  messagingSenderId: "1034678327974",
  appId: "1:1034678327974:web:b3d34ac00a70aacf0d3267",
  measurementId: "G-7HL2QX1VFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);