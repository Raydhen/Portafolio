import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCSRs6dTsHPpOpB_qwVVDH78Bk8H46vlMI",
    authDomain: "portafolio-53264.firebaseapp.com",
    projectId: "portafolio-53264",
    storageBucket: "portafolio-53264.appspot.com",
    messagingSenderId: "979365179209",
    appId: "1:979365179209:web:cf36631e3b4e644bfc7498"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);

  export const db=fb.firestore();