import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAoy_bgcYLw_Q_57GP05OzOCSlxMRFxWBI",
    authDomain: "shelfcomic-d30ef.firebaseapp.com",
    projectId: "shelfcomic-d30ef",
    storageBucket: "shelfcomic-d30ef.appspot.com",
    messagingSenderId: "211040119620",
    appId: "1:211040119620:web:abe1fb66d4fb9cf086c511"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();

export default app;