import React from "react";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGmuqmZvEw096eIgTEPTrrz43yg5vLVJA",
  authDomain: "reservas-box-c755c.firebaseapp.com",
  databaseURL: "https://reservas-box-c755c.firebaseio.com",
  projectId: "reservas-box-c755c",
  storageBucket: "reservas-box-c755c.appspot.com",
  messagingSenderId: "970287043628",
  appId: "1:970287043628:web:199f0694a9290af973ed89",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };
