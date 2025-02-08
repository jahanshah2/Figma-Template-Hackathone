// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBapXip20JHVAlx4hTlxmgOs8SkVzoESGU",
  authDomain: "nike-75bbc.firebaseapp.com",
  projectId: "nike-75bbc",
  storageBucket: "nike-75bbc.firebasestorage.app",
  messagingSenderId: "406753630910",
  appId: "1:406753630910:web:b5c0d6b6500f7a81915cef",
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
