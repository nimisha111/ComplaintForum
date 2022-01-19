import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD7iJQbhSkUClkaeW-ZQgdjkQnr4bQa598",
  authDomain: "willy-app-38cc7.firebaseapp.com",
  projectId: "willy-app-38cc7",
  storageBucket: "willy-app-38cc7.appspot.com",
  messagingSenderId: "719873120043",
  appId: "1:719873120043:web:6f1b34d172cc35caced76e"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

