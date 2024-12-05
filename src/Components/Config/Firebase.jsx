
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUWCYFWCatCaHrskoqpEYsD3l4vuBtisI",
  authDomain: "olx-4e462.firebaseapp.com",
  projectId: "olx-4e462",
  storageBucket: "olx-4e462.firebasestorage.app",
  messagingSenderId: "40962856155",
  appId: "1:40962856155:web:782961dfa79e8daf82e8fe",
  measurementId: "G-MX8YCKNBDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();