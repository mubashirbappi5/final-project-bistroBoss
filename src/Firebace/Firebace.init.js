// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sNNblaoNYL3Cl5NVY2KAvz54NsZomZA",
  authDomain: "bistroboss-project.firebaseapp.com",
  projectId: "bistroboss-project",
  storageBucket: "bistroboss-project.firebasestorage.app",
  messagingSenderId: "871780569570",
  appId: "1:871780569570:web:b2c04ec655e67fff64e9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);