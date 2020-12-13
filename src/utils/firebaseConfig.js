import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDTVyQVWocmU2tfT9uivYaHKY96q7LIF78",
    authDomain: "nyous-2894a.firebaseapp.com",
    projectId: "nyous-2894a",
    storageBucket: "nyous-2894a.appspot.com",
    messagingSenderId: "812024224558",
    appId: "1:812024224558:web:c5d761c80ee4443bddf8bf"
  };

  const app = firebase.initializeApp(firebaseConfig);

  //exporto o firestore para utilizar nos componentes 
  export const db = app.firestore();
  export const storage = app.storage();

  export default firebaseConfig;