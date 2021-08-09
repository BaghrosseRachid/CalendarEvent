
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDn-2h1YtzwMkG9osGWmQTnwZRlhSz-vVQ",
    authDomain: "events-3d3d8.firebaseapp.com",
    databaseURL: "https://events-3d3d8-default-rtdb.firebaseio.com/",
    projectId: "events-3d3d8",
    storageBucket: "events-3d3d8.appspot.com",
    messagingSenderId: "270528912476",
    appId: "1:270528912476:web:52fc8f74cc67aba940da99",
    measurementId: "G-71PS60X72P"
  };

// initialisation - config
firebase.initializeApp(firebaseConfig)

// get firebase storage
const storage = firebase.storage()

// export
export {storage, firebase as default}