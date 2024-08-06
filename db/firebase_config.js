import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";

import { getStorage } from "firebase/storage";

const API_KEY=import.meta.env.VITE_FIREBASE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "cw-services-739b7.firebaseapp.com",
  databaseURL: "https://cw-services-739b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cw-services-739b7",
  storageBucket: "cw-services-739b7.appspot.com",
  messagingSenderId: "561552733227",
  appId: "1:561552733227:web:b87cab4d2764d2b2b4666e",
  measurementId: "G-VZQ73G5JQ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // firestore database, returns a database object
export const storage = getStorage(app); // storage bucket, returns a storage object 

 