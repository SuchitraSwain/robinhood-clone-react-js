import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyCHd2NwLZajL2sRGCQj9Lor-U8h037uP68",
  // authDomain: "robinhood-18491.firebaseapp.com",
  // databaseURL: "https://robinhood-18491.firebaseio.com",
  // projectId: "robinhood-18491",
  // storageBucket: "robinhood-18491.appspot.com",
  // messagingSenderId: "780218621678",
  // appId: "1:780218621678:web:085fd8f2d36d56c33f9dff",
  // measurementId: "G-EFJRF2GST1"
  apiKey: "AIzaSyBXVQpyujUa7AI4nTkFJCOeAC64bQGove0",
  authDomain: "robinhood-clone-react-js.firebaseapp.com",
  projectId: "robinhood-clone-react-js",
  storageBucket: "robinhood-clone-react-js.appspot.com",
  messagingSenderId: "559743440036",
  appId: "1:559743440036:web:9e28728357168780618231",
  measurementId: "G-C00V03D2N0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
