// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1v4VCKehLoB5H-qWPaGDlrseOCcNFmXo",
  authDomain: "testingg-22c79.firebaseapp.com",
  projectId: "testingg-22c79",
  storageBucket: "testingg-22c79.firebasestorage.app",
  messagingSenderId: "78422403135",
  appId: "1:78422403135:web:99c07dfb0a136a8bf2f08a",
  measurementId: "G-PBHRKJL7B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);
