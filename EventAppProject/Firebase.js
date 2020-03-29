import Firebase from "firebase";

let config = {
	apiKey: "AIzaSyCh5lB0bh-4B08NKFx1g-7NtvvPCMWUaCg",
    authDomain: "eventappproject-c8bce.firebaseapp.com",
    databaseURL: "https://eventappproject-c8bce.firebaseio.com",
    projectId: "eventappproject-c8bce",
    storageBucket: "eventappproject-c8bce.appspot.com",
    messagingSenderId: "644344247605",
    appId: "1:644344247605:web:3ae3a51fea64c26bb6c87c",
    measurementId: "G-LMDS3FSVMK"
};
let app = Firebase.initializeApp(config);
export default Firebase;
export const db = app.database();