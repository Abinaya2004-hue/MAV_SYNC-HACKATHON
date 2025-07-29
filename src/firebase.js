// Import the SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkMF2-uAis7I9hG5OEY28gh7Pculrfd34",
  authDomain: "mav-sync-8c97c.firebaseapp.com",
  projectId: "mav-sync-8c97c",
  storageBucket: "mav-sync-8c97c.firebasestorage.app",
  messagingSenderId: "720009776650",
  appId: "1:720009776650:web:6683f0d72a2a5c96ab19f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Authentication instance
export const auth = getAuth(app);
