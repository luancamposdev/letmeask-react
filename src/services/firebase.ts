import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyD2HkhLnOymclS4X_7N32u0MRhphR_070k",
    authDomain: "letme-ask-mbtech.firebaseapp.com",
    databaseURL: "https://letme-ask-mbtech-default-rtdb.firebaseio.com",
    projectId: "letme-ask-mbtech",
    storageBucket: "letme-ask-mbtech.appspot.com",
    messagingSenderId: "850943372968",
    appId: "1:850943372968:web:1eddc0f28ea5ca25fd9c9d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
