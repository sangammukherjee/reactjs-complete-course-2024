import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiNkqbYIoq3MbFTPj5FPudgt4rehbRIOs",
  authDomain: "react-firebase-auth-2024.firebaseapp.com",
  projectId: "react-firebase-auth-2024",
  storageBucket: "react-firebase-auth-2024.appspot.com",
  messagingSenderId: "1310810938",
  appId: "1:1310810938:web:a5cffd0e2fabd740bba603",
  measurementId: "G-BDE3B4X25D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
