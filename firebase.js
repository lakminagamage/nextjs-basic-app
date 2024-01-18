// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_bEK4lTAVaMyvxGQYQWExr3wtV2Y9alY",
  authDomain: "nextjs-auth-app-184d5.firebaseapp.com",
  projectId: "nextjs-auth-app-184d5",
  storageBucket: "nextjs-auth-app-184d5.appspot.com",
  messagingSenderId: "175214255239",
  appId: "1:175214255239:web:1e7aa90a48262f09c42c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;