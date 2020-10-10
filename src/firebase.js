import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzxXeBCPmALWtV65ua6IYob8X6lFj14D8",
  authDomain: "facebook-clone-5dde8.firebaseapp.com",
  databaseURL: "https://facebook-clone-5dde8.firebaseio.com",
  projectId: "facebook-clone-5dde8",
  storageBucket: "facebook-clone-5dde8.appspot.com",
  messagingSenderId: "404441808787",
  appId: "1:404441808787:web:c80127c81d73d1abeaf266",
  measurementId: "G-CXMMHZKNY6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
