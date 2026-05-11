import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

let app: FirebaseApp | null = null;
let _db: Firestore | null = null;
let _auth: Auth | null = null;
let _storage: FirebaseStorage | null = null;

if (isConfigured) {
  app = initializeApp(firebaseConfig);
  _db = getFirestore(app);
  _auth = getAuth(app);
  _storage = getStorage(app);
} else if (typeof window !== "undefined") {
  console.warn(
    "[firebase] Skipping initialization — missing VITE_FIREBASE_* env vars (projectId/apiKey/appId)."
  );
}

export const analytics =
  isConfigured && app && typeof window !== "undefined"
    ? isSupported().then((yes) => (yes ? getAnalytics(app!) : null))
    : Promise.resolve(null);

export const db = _db as Firestore;
export const auth = _auth as Auth;
export const storage = _storage as FirebaseStorage;

export default app;
