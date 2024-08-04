// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsxRRL0N7U8aaEXZgosbZux4DyDZpIcHU",
  authDomain: "pantry-tracker-ce8bc.firebaseapp.com",
  projectId: "pantry-tracker-ce8bc",
  storageBucket: "pantry-tracker-ce8bc.appspot.com",
  messagingSenderId: "601450303761",
  appId: "1:601450303761:web:2952c28ac02978cee2fcb0",
  measurementId: "G-LS1TP5MWDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };