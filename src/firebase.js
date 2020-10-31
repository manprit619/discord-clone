
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDQmJSJLcnlVXjk4071XaSjyX_U4ELj7Tk",
    authDomain: "discord-clone-manprit619.firebaseapp.com",
    databaseURL: "https://discord-clone-manprit619.firebaseio.com",
    projectId: "discord-clone-manprit619",
    storageBucket: "discord-clone-manprit619.appspot.com",
    messagingSenderId: "406585932586",
    appId: "1:406585932586:web:13ae4bc163d30170a63c53",
    measurementId: "G-WMMEMRJ3R6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;

