// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUib3Dpd0MxrnLq_bDOKyHUuO3hqV17w0",
  authDomain: "entitlement-b8dd1.firebaseapp.com",
  projectId: "entitlement-b8dd1",
  storageBucket: "entitlement-b8dd1.appspot.com",
  messagingSenderId: "685105686751",
  appId: "1:685105686751:web:97a5c347b646293e6e216a",
  measurementId: "G-04C7NZPB30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;