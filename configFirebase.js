import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAGtkfnQj-ipiqVD7Wx8kUEyf4NsqgH8o8",
  authDomain: "crud-e.firebaseapp.com",
  databaseURL: "https://crud-e-default-rtdb.firebaseio.com",
  projectId: "crud-e",
  storageBucket: "crud-e.appspot.com",
  messagingSenderId: "745321470060",
  appId: "1:745321470060:web:e1e83632fd579e64a96049"
};


const app = initializeApp(firebaseConfig);

export default firebase;
