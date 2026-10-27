import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase Console → Project settings → Your apps → Web app configuration.
const firebaseConfig = {
  apiKey: 'PASTE_FIREBASE_API_KEY_HERE',
  authDomain: 'PASTE_FIREBASE_AUTH_DOMAIN_HERE',
  projectId: 'PASTE_FIREBASE_PROJECT_ID_HERE',
  appId: 'PASTE_FIREBASE_APP_ID_HERE'
};

export const firebaseConfigured = Boolean(
  firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith('PASTE_') &&
  firebaseConfig.authDomain && !firebaseConfig.authDomain.startsWith('PASTE_') &&
  firebaseConfig.projectId && !firebaseConfig.projectId.startsWith('PASTE_') &&
  firebaseConfig.appId && !firebaseConfig.appId.startsWith('PASTE_')
);

const app = firebaseConfigured ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const googleProvider = firebaseConfigured ? new GoogleAuthProvider() : null;
if (googleProvider) googleProvider.setCustomParameters({ prompt: 'select_account' });
