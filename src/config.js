import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyChQ6dFbF49nWiiQUEnznoWCKM7927aJw0",
  authDomain: "croma-8bc08.firebaseapp.com",
  projectId: "croma-8bc08",
  storageBucket: "croma-8bc08.appspot.com",
  messagingSenderId: "758230907454",
  appId: "1:758230907454:web:be3adb32126182c5edaf6f",
  measurementId: "G-J5BZC614FG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const GooGleAuth=()=>{
  let provider=new GoogleAuthProvider();
  return signInWithPopup(auth,provider)
}

export const SignMailAuth=(mail,password)=>{
  return createUserWithEmailAndPassword(auth,mail,password)
}


export const loginMailAuth=(mail,password)=>{
  return signInWithEmailAndPassword(auth,mail,password)
}