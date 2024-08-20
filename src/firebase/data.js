import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1wXEZ6N4qCquMfLgD9vRd7AM6XjK1-ZE',
	authDomain: 'ecommerce-pf-reac.firebaseapp.com',
	projectId: 'ecommerce-pf-reac',
	storageBucket: 'ecommerce-pf-reac.appspot.com',
	messagingSenderId: '416581003211',
	appId: '1:416581003211:web:450f73b62844c60d71784e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
