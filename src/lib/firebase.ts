
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// IMPORTANT: ENSURE THESE VALUES ARE CORRECTLY POPULATED WITH YOUR *NEW* FIREBASE PROJECT'S CREDENTIALS,
// PREFERABLY VIA ENVIRONMENT VARIABLES.
// Create a .env.local file in your project root and add your Firebase config there:
// NEXT_PUBLIC_FIREBASE_API_KEY=your_new_project_api_key
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_new_project_auth_domain
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_new_project_project_id
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_new_project_storage_bucket
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_new_project_messaging_sender_id
// NEXT_PUBLIC_FIREBASE_APP_ID=your_new_project_app_id
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_new_project_measurement_id (Optional)

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_NEW_PROJECT_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_NEW_PROJECT_AUTH_DOMAIN",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_NEW_PROJECT_PROJECT_ID",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_NEW_PROJECT_STORAGE_BUCKET",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_NEW_PROJECT_MESSAGING_SENDER_ID",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_NEW_PROJECT_APP_ID",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "YOUR_NEW_PROJECT_MEASUREMENT_ID" // Optional
};

// CRITICAL DEBUGGING STEP FOR 'auth/unauthorized-domain' or when switching projects:
console.log(
  "===================================================================\n" +
  "Firebase Config YOUR APP IS LOADING (Verify these for your NEW project):\n" +
  "-------------------------------------------------------------------\n" +
  `  Project ID: ${firebaseConfig.projectId}\n` +
  `  Auth Domain: ${firebaseConfig.authDomain}\n` +
  "-------------------------------------------------------------------\n" +
  "==> STEP 1: If you have switched Firebase projects, ensure the 'Project ID' and 'Auth Domain' printed above match your NEW Firebase project settings at https://console.firebase.google.com/.\n" +
  "==> STEP 2: Update your .env.local file with the CORRECT credentials for the NEW project and RESTART your Next.js server.\n" +
  "==> STEP 3: In your NEW Firebase project, ensure 'localhost' (and any other domains your app runs on) is listed under 'Authorized domains' (Firebase Console > Authentication > Sign-in method).\n" +
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
