// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaqwVSX1Ao81aTjvmiQcm940-PGr-JAcY",
  authDomain: "ai-trip-planner-79960.firebaseapp.com",
  projectId: "ai-trip-planner-79960",
  storageBucket: "ai-trip-planner-79960.firebasestorage.app",
  messagingSenderId: "582764705511",
  appId: "1:582764705511:web:08d75f931529d991045442",
  measurementId: "G-T8VHJB52EP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);