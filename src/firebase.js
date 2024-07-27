// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-state-4b7d6.firebaseapp.com",
    projectId: "mern-real-state-4b7d6",
    storageBucket: "mern-real-state-4b7d6.appspot.com",
    messagingSenderId: "1082406913127",
    appId: "1:1082406913127:web:c5d99881d22c837fb940c2",
    measurementId: "G-2P832XWZTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
