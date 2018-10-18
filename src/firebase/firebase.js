import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAfpTn7FDhoBVEokFyKFNJYwIDXX3W_yOI",
  authDomain: "gvshelper.firebaseapp.com",
  databaseURL: "https://gvshelper.firebaseio.com",
  projectId: "gvshelper",
  storageBucket: "gvshelper.appspot.com",
  messagingSenderId: "975453322547"
};

//initialize your firebase with the config parameters
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//expose the firebase database
const db = firebase.database();

export { db };
