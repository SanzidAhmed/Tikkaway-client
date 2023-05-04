// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2yWFPK4NlI6pXhdJPJsrQsQxkGP-05IM",
  authDomain: "tikkaway-client.firebaseapp.com",
  projectId: "tikkaway-client",
  storageBucket: "tikkaway-client.appspot.com",
  messagingSenderId: "226592733578",
  appId: "1:226592733578:web:3406c6b3d625096e35f073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;