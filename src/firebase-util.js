import { useEffect, useState } from "react"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWLdhbi_3IBg7oiyw9NaIam359Uau1iWc",
  authDomain: "weesqueepictures.firebaseapp.com",
  projectId: "weesqueepictures",
  storageBucket: "weesqueepictures.appspot.com",
  messagingSenderId: "527278051619",
  appId: "1:527278051619:web:3401abee65eef79edc7c96",
  measurementId: "G-CGW0KQ1BDZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export function signup (email,password){
   return createUserWithEmailAndPassword(auth, email, password)
}

export function logout () {
    return signOut(auth)
}

//custom hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState ()

    useEffect(() => {
       const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
       return unsub
    }, [])
    return currentUser
}