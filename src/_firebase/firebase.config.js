// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo0jEdljro4Fuoox3hvwIIww867l1-mY0",
  authDomain: "diuswe-cpsheet.firebaseapp.com",
  projectId: "diuswe-cpsheet",
  storageBucket: "diuswe-cpsheet.appspot.com",
  messagingSenderId: "249004902554",
  appId: "1:249004902554:web:a15ec2ad60a6e3a2c27723",
  measurementId: "G-E936GMMLKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);