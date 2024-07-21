
/**
 * Autor: jl_
 * ADSI - SENA
 * email: devluisluzardo@gmail.com
 * Fecha creacion : 19 - Julio- 2024
 * main2.js
 * desscripcion: Acceder al dato guardado,
 *  Firebase realtime
 * 
**/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

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

// Define the path where you want to store/retrieve data
const dataRef = ref(database, 'bienvenida/');


// Function to display retrieved data
function displayData(data) {
  //alert(data.message); // Access the "message" property
  document.getElementById("data-input").value=data.message; // Assuming an element with this ID
}

// Attach a listener to the database reference to listen for changes and display data
onValue(dataRef, (snapshot) => {
  const data = snapshot.val();
  displayData(data);
}, {
  // Optional error handling
  onError: (error) => {
    console.error("Error reading data:", error);
  }
});

// ... rest of your code
