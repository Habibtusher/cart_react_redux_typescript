// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgqT1v6go6BxyDOWHEQ9eBixByxPkADz8",
  authDomain: "tech-net-6e995.firebaseapp.com",
  projectId: "tech-net-6e995",
  storageBucket: "tech-net-6e995.appspot.com",
  messagingSenderId: "394727789079",
  appId: "1:394727789079:web:34048bed4badd747aa4252"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);