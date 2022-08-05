import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDjMu8AwW3eLs73X0PUuGLTJ-bEKFTIp00",
  authDomain: "test-beba8.firebaseapp.com",
  projectId: "test-beba8",
  storageBucket: "test-beba8.appspot.com",
  messagingSenderId: "974964907801",
  appId: "1:974964907801:web:4929c5ffb9e39febf52f88",
  measurementId: "G-4TV5JJD87M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "Braddock"), {
    first: "new jersey",
    last: "braddock",
    born: 1918
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
};
