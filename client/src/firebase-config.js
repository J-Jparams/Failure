import { initializeApp } from "./server/firebase/app";
import { getFirestore } from "./server/@firebase/app";



const firebaseConfig = {

};


const app =initializeApp(firebaseConfig);

export const dp = getFirestore(app);