/**
 * Autor: jl_
 * ADSI - SENA
 * email: devluisluzardo@gmail.com
 * Fecha creacion : 19 - Julio- 2024
 * 
 * desscripcion: grabar un dato en,
 *  Firebase realtime
 *  con el path : "bienvenida/message : "Hola Mundo"
 * 
**/
// Import the functions you need from the SDKs you need
import {
  initializeApp
}
  from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getDatabase, ref, set, remove
}
  from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
}
  from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want touse
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdmwUlN1EuvzVpqyO7sPWGCkLL20SKgM8",
  authDomain: "fir-dev-a4afe.firebaseapp.com",
  databaseURL: "https://fir-dev-a4afe-default-rtdb.firebaseio.com",
  projectId: "fir-dev-a4afe",
  storageBucket: "fir-dev-a4afe.appspot.com",
  messagingSenderId: "406718812809",
  appId: "1:406718812809:web:06c12ebe913cae9d622c58",
  measurementId: "G-7JB48STWSN"
};

const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider(firebaseConfig);

grabarAuth.addEventListener("click", (e) => {

  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

      document.getElementById("txtinfo1").value = "LOGIN USER ...";

    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    });

});
//F NEW : 1