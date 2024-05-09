// Firebase configuration and export of relevant Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyACv_UsipplRuyA8XUP_ulm1Z3zoTy1xNU",
    authDomain: "real---estate-604ff.firebaseapp.com",
    projectId: "real---estate-604ff",
    storageBucket: "real---estate-604ff.appspot.com",
    messagingSenderId: "89828625718",
    appId: "1:89828625718:web:0e5cb235b4e1711226f797",
    measurementId: "G-G88Q56CB52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
