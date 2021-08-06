import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2e-Azq6HbKiWu9D68T-ymRVuF_qkaUWs",
    authDomain: "facebook-clone-d6e68.firebaseapp.com",
    projectId: "facebook-clone-d6e68",
    storageBucket: "facebook-clone-d6e68.appspot.com",
    messagingSenderId: "436484351219",
    appId: "1:436484351219:web:5d3251dd8824c252ed4386",
    measurementId: "G-X9X4R1J6B0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;