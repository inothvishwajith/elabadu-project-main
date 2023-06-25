import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBl37GDjNM89WHY_bMGcGWp9GvtCeCclU8",
  authDomain: "elabadunew.firebaseapp.com",
  projectId: "elabadunew",
  storageBucket: "elabadunew.appspot.com",
  messagingSenderId: "143946545050",
  appId: "1:143946545050:web:e2599e5045c5cfead5ec23",
  measurementId: "G-FS1B622JX4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
