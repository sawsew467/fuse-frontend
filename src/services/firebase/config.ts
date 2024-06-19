// Import the functions you need from the SDKs you need
import { constants } from "@/settings";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzzoeDkVH80GHb4y8I0IhiAgW_vNLHzyU",
  authDomain: "classified-723b2.firebaseapp.com",
  projectId:"classified-723b2",
  storageBucket: "classified-723b2.appspot.com",
  messagingSenderId: "821133048235",
  appId: "1:821133048235:web:24960a7979bc55e13d3aee",
  measurementId: "G-WYWVH2G65C",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";

const providerGoogle = new GoogleAuthProvider();

const provider = {
  providerGoogle,
};

export { auth, provider, app };
