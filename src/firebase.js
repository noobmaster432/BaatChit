// Import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "baatchit-noobmaster432.firebaseapp.com",
  projectId: "baatchit-noobmaster432",
  storageBucket: "baatchit-noobmaster432.appspot.com",
  messagingSenderId: "139988169705",
  appId: "1:139988169705:web:bf1f5bcb2f1f6cd5811178",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();