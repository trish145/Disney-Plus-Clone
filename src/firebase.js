import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXg79rKtzwM8ge-CGhFuhQfMG5M6eZ86g",
  authDomain: "disney-klonia.firebaseapp.com",
  projectId: "disney-klonia",
  storageBucket: "disney-klonia.appspot.com",
  messagingSenderId: "965864312165",
  appId: "1:965864312165:web:6b60fcfd9fa0e1cd66e58c",
  measurementId: "G-X7NJMJLQHZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth, provider, storage };
export default db;
