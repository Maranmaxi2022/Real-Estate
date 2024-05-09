// Firebase configuration and export of relevant Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyC8aeYA2lamecz1axScvZZ004teHwq-2oc",
    authDomain: "real---estate-2750b.firebaseapp.com",
    projectId: "real---estate-2750b",
    storageBucket: "real---estate-2750b.appspot.com",
    messagingSenderId: "566101892819",
    appId: "1:566101892819:web:662d6ebb916286387bfe26",
    measurementId: "G-01VZPJMYGZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
