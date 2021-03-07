import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAD0alf5wv7i1Semlhu3sTyS0hYcV7vlRs",
  authDomain: "clone-b6ee6.firebaseapp.com",
  projectId: "clone-b6ee6",
  storageBucket: "clone-b6ee6.appspot.com",
  messagingSenderId: "1043222576116",
  appId: "1:1043222576116:web:900f70f8018f75b988d7a1",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
