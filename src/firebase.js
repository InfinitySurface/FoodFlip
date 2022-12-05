// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh6mBfElbnMoXxzC7WOGXClyukIGAnVdo",
  authDomain: "recipe-blog-b5a22.firebaseapp.com",
  projectId: "recipe-blog-b5a22",
  storageBucket: "recipe-blog-b5a22.appspot.com",
  messagingSenderId: "146280712321",
  appId: "1:146280712321:web:c7dd3a240c4f9a3a4fe580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)