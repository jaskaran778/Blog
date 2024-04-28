// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-b0440.firebaseapp.com",
    projectId: "mern-blog-b0440",
    storageBucket: "mern-blog-b0440.appspot.com",
    messagingSenderId: "585806984995",
    appId: "1:585806984995:web:56131d94fee66017bffe96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
