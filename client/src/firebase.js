// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-153ff.firebaseapp.com",
  projectId: "mern-estate-153ff",
  storageBucket: "mern-estate-153ff.appspot.com",
  messagingSenderId: "637631118533",
  appId: "1:637631118533:web:b8d5b3bce740bb4f09c4ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);