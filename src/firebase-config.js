import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAbbjJdVPsWJcm9AqhKaHB3doeuBLSWjg",
  authDomain: "labour-party-355a2.firebaseapp.com",
  projectId: "labour-party-355a2",
  storageBucket: "labour-party-355a2.appspot.com",
  messagingSenderId: "342620428524",
  appId: "1:342620428524:web:9fee6f0af71750a9382dc9",
  measurementId: "G-DLMJ2HRC2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);