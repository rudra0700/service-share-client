// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD19ZQxLYrJ8C7GmCA_GobWzfcokzN0ILg",
  authDomain: "service-provider-ee9a8.firebaseapp.com",
  projectId: "service-provider-ee9a8",
  storageBucket: "service-provider-ee9a8.firebasestorage.app",
  messagingSenderId: "469486589077",
  appId: "1:469486589077:web:e7d798f1aab714e20ef79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;