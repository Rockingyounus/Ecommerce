// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaiwJJe7ozE8g-a_p1l1jV-C_rcd7ONs",
  authDomain: "ecommerce-99522.firebaseapp.com",
  projectId: "ecommerce-99522",
  storageBucket: "ecommerce-99522.appspot.com",
  messagingSenderId: "954746649024",
  appId: "1:954746649024:web:9c4956cefdecb25fda3025",
  measurementId: "G-KT5MS8FR4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {fireDB, auth}