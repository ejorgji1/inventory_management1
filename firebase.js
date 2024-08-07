// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCASZt1tXq-uu6B0M4imaywpqyCMPrlCo",
  authDomain: "inventory-management-a4c72.firebaseapp.com",
  projectId: "inventory-management-a4c72",
  storageBucket: "inventory-management-a4c72.appspot.com",
  messagingSenderId: "709589952224",
  appId: "1:709589952224:web:0197d793ec6d9643e35285",
  measurementId: "G-0HZTSPW9Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}