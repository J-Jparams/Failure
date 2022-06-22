import { initializeApp } from "./server/firebase/app";
import { getFirestore } from "./server/@firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDpjRlN8mt1BMibz_Fot7fT6p2WT1-pqxw",
  authDomain: "dev-in-space.firebaseapp.com",
  projectId: "dev-in-space",
  storageBucket: "dev-in-space.appspot.com",
  messagingSenderId: "597160643163",
  appId: "1:597160643163:web:3444ec3ca3f667e9248d7e",
  measurementId: "G-71JPMPM54W"
};


const app =initializeApp(firebaseConfig);

export const dp = getFirestore(app);