 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAjyLNP39ejG5qrX5U2fMiIW8Ks_yNDNWc",
    authDomain: "udemy-ninja-smoothies-49c23.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-49c23.firebaseio.com",
    projectId: "udemy-ninja-smoothies-49c23",
    storageBucket: "udemy-ninja-smoothies-49c23.appspot.com",
    messagingSenderId: "575483781380",
    appId: "1:575483781380:web:116f18a117f50bcc48f051",
    measurementId: "G-GNCMKFY02F"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots:true})



  
  
  //export firstore database  

  export default firebaseApp.firestore()