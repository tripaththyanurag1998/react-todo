import firebase from 'firebase';
                               
  const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDG5jJjafe_kzL9LDUBDgK1vsFJB4cNkro",
  authDomain: "todo-app-af493.firebaseapp.com",
  databaseURL: "https://todo-app-af493.firebaseio.com",
  projectId: "todo-app-af493",
  storageBucket: "todo-app-af493.appspot.com",
  messagingSenderId: "661546499082",
  appId: "1:661546499082:web:3cc917011dac2dc6bcf3f3",
  measurementId: "G-9CDX9VVFK0"
  });
  const db = firebaseApp.firestore();
  export default db;