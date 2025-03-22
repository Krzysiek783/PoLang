import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithCredential, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "polang-6a0ac.firebaseapp.com",
    projectId: "polang-6a0ac",
    storageBucket: "polang-6a0ac.appspot.com",
    messagingSenderId: "591273198583",
    appId: "1:591273198583:android:4ef1ac84e91d03d678e4f2"
};

// Sprawdzenie, czy Firebase został już zainicjalizowany
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Google i Facebook Provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithCredential, doc, setDoc, getDoc, sendEmailVerification };
