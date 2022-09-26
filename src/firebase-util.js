import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

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

export function login (email,password){
   return signInWithEmailAndPassword(auth, email, password)
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