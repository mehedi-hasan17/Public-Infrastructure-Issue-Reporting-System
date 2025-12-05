// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCa8rkeDVUrBlc-JGFespZy32BfqHtYLc",
  authDomain: "public-infrastructure-issue.firebaseapp.com",
  projectId: "public-infrastructure-issue",
  storageBucket: "public-infrastructure-issue.firebasestorage.app",
  messagingSenderId: "383742012214",
  appId: "1:383742012214:web:c161fc7433297d2140e197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
