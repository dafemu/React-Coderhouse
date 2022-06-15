// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_TxmCy1la_-Z1YqJUpZ2xEJFUOeHA3F8",
  authDomain: "ecommerce-shoes-dmb.firebaseapp.com",
  projectId: "ecommerce-shoes-dmb",
  storageBucket: "ecommerce-shoes-dmb.appspot.com",
  messagingSenderId: "911081509955",
  appId: "1:911081509955:web:96a165703f8490468eb0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;