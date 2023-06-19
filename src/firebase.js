// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeX5Bl119lMQCRsJQkKBm1OVYKi8J_MoY',
  authDomain: 'mundo-nomade.firebaseapp.com',
  projectId: 'mundo-nomade',
  storageBucket: 'mundo-nomade.appspot.com',
  messagingSenderId: '1053555948264',
  appId: '1:1053555948264:web:b3c3ca0ecef304438c275d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
