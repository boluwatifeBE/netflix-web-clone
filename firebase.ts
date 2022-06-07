// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDqpfS2vn_pTx-tdjomLccUVXQdHsYkacI',
	authDomain: 'netflix-web-clone-745fd.firebaseapp.com',
	// databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
	projectId: 'netflix-web-clone-745fd',
	storageBucket: 'netflix-web-clone-745fd.appspot.com',
	messagingSenderId: '361962169468',
	appId: '1:361962169468:web:c5858734a16328042ad5f9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }