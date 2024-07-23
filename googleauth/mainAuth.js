import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

alert("");