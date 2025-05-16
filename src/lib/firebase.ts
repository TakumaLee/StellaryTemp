
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// IMPORTANT: ENSURE THESE VALUES ARE CORRECTLY POPULATED, PREFERABLY VIA ENVIRONMENT VARIABLES.
// Create a .env.local file in your project root and add your Firebase config there:
// NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_actual_storage_bucket
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_messaging_sender_id
// NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_actual_measurement_id (Optional)

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY_PLACEHOLDER",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN_PLACEHOLDER",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID_PLACEHOLDER",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET_PLACEHOLDER",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID_PLACEHOLDER",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID_PLACEHOLDER",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID_PLACEHOLDER" // Optional
};

// CRITICAL DEBUGGING STEP FOR 'auth/unauthorized-domain':
console.log(
  "===================================================================\n" +
  "Firebase Config YOUR APP IS LOADING:\n" +
  "-------------------------------------------------------------------\n" +
  `  Project ID: ${firebaseConfig.projectId}\n` +
  `  Auth Domain: ${firebaseConfig.authDomain}\n` +
  "-------------------------------------------------------------------\n" +
  "==> STEP 1: Compare the 'Project ID' and 'Auth Domain' printed above with the values in your Firebase project settings at https://console.firebase.google.com/.\n" +
  "==> STEP 2: In that Firebase project, ensure 'localhost' (and any other domains your app runs on) is listed under 'Authorized domains' (Firebase Console > Authentication > Sign-in method).\n" +
  "==> STEP 3: If there's a mismatch in Project ID/Auth Domain, or if 'localhost' is missing from authorized domains for THIS project, update your .env.local file with the CORRECT credentials and RESTART your Next.js server.\n" +
  "==================================================================="
);

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  console.log("Firebase App Initialized (or re-initialized if config changed and server restarted).");
} else {
  app = getApp();
  console.log("Firebase App already exists, getting instance.");
}

export const auth = getAuth(app);
export default app;
