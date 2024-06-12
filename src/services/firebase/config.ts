// Import the functions you need from the SDKs you need
import { constants } from "@/settings";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: constants.FIREBASE_API_KEY,
  authDomain: constants.FIREBASE_AUTH_DOMAIN,
  projectId: constants.FIREBASE_PROJECT_ID,
  storageBucket: constants.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: constants.FIREBASE_MESSAGING_SENDER_ID,
  appId: constants.FIREBASE_APP_ID,
  measurementId: constants.FIREBASE_MEASUREMENT_ID,
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
