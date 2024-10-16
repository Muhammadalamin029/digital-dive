import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIKfWuTVDurw1obMs1ypnMuEySETV2lJA",
  authDomain: "digital-dive.firebaseapp.com",
  projectId: "digital-dive",
  storageBucket: "digital-dive.appspot.com",
  messagingSenderId: "676183035591",
  appId: "1:676183035591:web:3a283a9b7af2d9729578e2",
  measurementId: "G-KEREG44K89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
