import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAdjLtymPskZokz5zbpbwA0bw8OSU_LJDw",
  authDomain: "wily-ccad6.firebaseapp.com",
  projectId: "wily-ccad6",
  storageBucket: "wily-ccad6.appspot.com",
  messagingSenderId: "844707714746",
  appId: "1:844707714746:web:7893fb9775299209a55483",
  measurementId: "G-7Y82W70HM4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
