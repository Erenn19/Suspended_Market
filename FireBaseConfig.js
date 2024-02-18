// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVRWq7qX09PZZLwaf1nEp8JYpC_B7Eq1A",
    authDomain: "market-auth-2bc5e.firebaseapp.com",
    projectId: "market-auth-2bc5e",
    storageBucket: "market-auth-2bc5e.appspot.com",
    messagingSenderId: "1040338893579",
    appId: "1:1040338893579:web:0dc50a49ab4de58c6c400e",
    measurementId: "G-CQ7V56MJXB"
};



// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)