import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2KVFHYw7eBAA6N__dE6LVKGG8Vk6c4cY",
  authDomain: "whatsapp-clone-1d364.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1d364.firebaseio.com",
  projectId: "whatsapp-clone-1d364",
  storageBucket: "whatsapp-clone-1d364.appspot.com",
  messagingSenderId: "316317049852",
  appId: "1:316317049852:web:f4be88b946f34f0f3d8879",
  measurementId: "G-1TZPRGRH8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
