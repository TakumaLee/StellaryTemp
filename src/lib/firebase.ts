
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// IMPORTANT: REPLACE THESE WITH YOUR ACTUAL FIREBASE PROJECT CREDENTIALS.
// It's HIGHLY RECOMMENDED to use environment variables for this.
// Create a .env.local file in your project root and add your Firebase config there:
// NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_actual_storage_bucket
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_messaging_sender_id
// NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_actual_measurement_id (Optional)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY_REPLACE_ME",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN_REPLACE_ME",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID_REPLACE_ME",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET_REPLACE_ME",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID_REPLACE_ME",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID_REPLACE_ME",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID_REPLACE_ME" // Optional
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth = getAuth(app);
export default app;

