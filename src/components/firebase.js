import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDcxCX6NKx2ji4KtpkwFwpbTmCjeHIz31Y",
    authDomain: "linkedin-clone-a1c5f.firebaseapp.com",
    projectId: "linkedin-clone-a1c5f",
    storageBucket: "linkedin-clone-a1c5f.appspot.com",
    messagingSenderId: "282959737721",
    appId: "1:282959737721:web:82b731468848b2fabef5a8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};