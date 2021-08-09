
import firebase from "firebase";

/**
 * Firebase configuration
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, measurementId: string, authDomain: string}}
 */
const firebaseConfig = {
    apiKey: "AIzaSyByRXlA1ePYNRO-GDYTzDWgTAK1eJw8OUw",
    authDomain: "studio-streaming-digitalyz.firebaseapp.com",
    databaseURL: "https://studio-streaming-digitalyz-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "studio-streaming-digitalyz",
    storageBucket: "studio-streaming-digitalyz.appspot.com",
    messagingSenderId: "527766602930",
    appId: "1:527766602930:web:d9954cf6705e4ba79fb5ab",
    measurementId: "G-94SJBH8QNX"
};

// initialisation - config
firebase.initializeApp(firebaseConfig)

// get firebase storage
const storage = firebase.storage()

// export
export {storage, firebase as default}