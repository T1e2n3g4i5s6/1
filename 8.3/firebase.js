import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, where} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDjMu8AwW3eLs73X0PUuGLTJ-bEKFTIp00",
  authDomain: "test-beba8.firebaseapp.com",
  projectId: "test-beba8",
  storageBucket: "test-beba8.appspot.com",
  messagingSenderId: "974964907801",
  appId: "1:974964907801:web:4929c5ffb9e39febf52f88",
  measurementId: "G-4TV5JJD87M"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import { collection, getDocs } from "firebase/firestore"; 

// const querySnapshot = await getDocs(collection(db, "Braddock"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });




// const docRef = doc(db, "Braddock", "cBIAf4W8QW3l6Z1MLOzp");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }

// const reference1 = collection(db,"tyj");
// const reference2 = collection(db,"Braddock");

// const datas1 = await getDocs(reference1);
// const datas2 = await getDocs(reference2);
// datas1.forEach((data) => console.log(data.data()))
// datas2.forEach((data) => console.log(data.data()))
import {query} from "firebase/firestore";
const q = query(collection(db, "Braddock"), where("utas", "==", "samsung"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {console.log(doc.id, "==", doc.data());})


