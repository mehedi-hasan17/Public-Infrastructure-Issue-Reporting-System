// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2srqi-zwlrNldvf84d8BIe7PJzgdcADs",
  authDomain: "toy-toipa.firebaseapp.com",
  projectId: "toy-toipa",
  storageBucket: "toy-toipa.firebasestorage.app",
  messagingSenderId: "952754300017",
  appId: "1:952754300017:web:78737e5a8f86a68a7927d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
