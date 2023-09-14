// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHZZ--AuDQdK7CQTBLqGXNO8VFCvbynsc",
  authDomain: "moviegpt-13a15.firebaseapp.com",
  projectId: "moviegpt-13a15",
  storageBucket: "moviegpt-13a15.appspot.com",
  messagingSenderId: "65012544074",
  appId: "1:65012544074:web:86f9fff8cebca313e06cb3",
  measurementId: "G-PP0CDGRSMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
