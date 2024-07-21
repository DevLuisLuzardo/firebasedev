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
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = getDatabase(app);

//
grabarND.addEventListener("click", (e) => {
  //NUEVOS DATOS FORM
  const datocampo = document.getElementById("data-input-nc").value;
  const datovalor = document.getElementById("data-input-nv").value;

  //Agregar : Nuevo Registro a Firebase Realtime 
  const dataRef = ref(database, datocampo + '/');

  // Escribir : Nuevo Dato
  set(dataRef, {
    message: datovalor
  })
  .then(() => {
    console.log("Data saved successfully!");
  })
  .catch((error) => {
    console.error("Error writing data:", error);
  });


});
