// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn4EDucrHdMFhbwtE9VfSRl6qRXw72LGw",
  authDomain: "fir-auth-803b0.firebaseapp.com",
  projectId: "fir-auth-803b0",
  storageBucket: "fir-auth-803b0.appspot.com",
  messagingSenderId: "231896007276",
  appId: "1:231896007276:web:7233eb0c7a3570b4eace49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
