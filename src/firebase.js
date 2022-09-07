import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB1MToDjtABhDvSo7gDcVNHflolM1qaj8A',
  authDomain: 'clone-bdfe6.firebaseapp.com',
  projectId: 'clone-bdfe6',
  storageBucket: 'clone-bdfe6.appspot.com',
  messagingSenderId: '637573988528',
  appId: '1:637573988528:web:f61e0da7c300024d5b3b75',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
