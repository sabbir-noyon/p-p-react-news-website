// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqUWWFXjeMBPjyXN3ZxMBot-8IVIG4Yug",
  authDomain: "p-p-react-news-website.firebaseapp.com",
  projectId: "p-p-react-news-website",
  storageBucket: "p-p-react-news-website.appspot.com",
  messagingSenderId: "353770383722",
  appId: "1:353770383722:web:d45fcb2e35d64f20ea5d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;