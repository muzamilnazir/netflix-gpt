// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB_HqinzaXFJsYiXkwS52sgtb5KYZgFbE",
    authDomain: "netflixgpt-5ad7b.firebaseapp.com",
    projectId: "netflixgpt-5ad7b",
    storageBucket: "netflixgpt-5ad7b.appspot.com",
    messagingSenderId: "72192802606",
    appId: "1:72192802606:web:3c3f23c6665d6fb99884bf"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication service
export const auth = getAuth(app);
