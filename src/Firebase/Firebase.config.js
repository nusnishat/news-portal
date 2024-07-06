// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4aF8qI9p1ueWig94VFI2XH0_99drhqdA",
  authDomain: "news-dragon-client-4abb2.firebaseapp.com",
  projectId: "news-dragon-client-4abb2",
  storageBucket: "news-dragon-client-4abb2.appspot.com",
  messagingSenderId: "834862732300",
  appId: "1:834862732300:web:3f6b8455856845f6160a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;