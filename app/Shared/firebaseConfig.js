// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEOjRqBnt_pvuMdk5Q91ML088ZuEdyICk",
    authDomain: "pintrest-project.firebaseapp.com",
    projectId: "pintrest-project",
    storageBucket: "pintrest-project.appspot.com",
    messagingSenderId: "255703079583",
    appId: "1:255703079583:web:4f6d072e26e2aa735ba0aa",
    measurementId: "G-GVYEH3369Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
