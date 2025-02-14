// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "thinkzone-41685.firebaseapp.com",
  projectId: "thinkzone-41685",
  storageBucket: "thinkzone-41685.firebasestorage.app",
  messagingSenderId: "929542026926",
  appId: "1:929542026926:web:cbed67767fea6751f11f3f",
  measurementId: "G-G8MH5FXJNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const  storage= getStorage(app);