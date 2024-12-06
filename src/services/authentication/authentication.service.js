// import firebase from "firebase/compat/app";

import { firebaseinit } from "../../../app/index";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "firebase/compat/auth";


// import firebase from "firebase/compat/app";

// import { initializeAuth } from "firebase/auth";


export const loginRequest = (email, password) => {
  const auth = getAuth(firebaseinit)
  return signInWithEmailAndPassword(auth, email, password);


}





