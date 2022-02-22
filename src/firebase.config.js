// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXoCGAzvEH7AF82TLjpq5GpLADUBop_Qw",
  authDomain: "house-marketplace-app-c5a9d.firebaseapp.com",
  projectId: "house-marketplace-app-c5a9d",
  storageBucket: "house-marketplace-app-c5a9d.appspot.com",
  messagingSenderId: "912432047757",
  appId: "1:912432047757:web:c66348e3d50928f58964c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()