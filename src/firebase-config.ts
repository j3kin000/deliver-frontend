import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3sGGOMzRts9b95503ku-QymxKAol7IZ8",
  authDomain: "delivery-81a53.firebaseapp.com",
  projectId: "delivery-81a53",
  storageBucket: "delivery-81a53.appspot.com",
  messagingSenderId: "657915233963",
  appId: "1:657915233963:web:c377c4682d548587e4d9ee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, storage };
