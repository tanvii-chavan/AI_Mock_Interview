// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8lnjhqK8rqXVD-QU_RbJCPFP2B6ozzQ",
  authDomain: "ai-mock-interviews-c6f97.firebaseapp.com",
  projectId: "ai-mock-interviews-c6f97",
  storageBucket: "ai-mock-interviews-c6f97.firebasestorage.app",
  messagingSenderId: "748605959906",
  appId: "1:748605959906:web:b8d8b309dcf48427c878bb",
  measurementId: "G-QBDV9H1TSE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);