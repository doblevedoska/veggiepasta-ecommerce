// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT_T4zwq_f2Ni8wtfzG9ntB85PaOcOtMc",
  authDomain: "veggiepasta-ecommerce.firebaseapp.com",
  projectId: "veggiepasta-ecommerce",
  storageBucket: "veggiepasta-ecommerce.appspot.com",
  messagingSenderId: "1038283991945",
  appId: "1:1038283991945:web:cba0287772b5ef67550f58"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
