import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDq1LfNs8H2QHgUN4sF3MdNBGrZd40Pmak",
    authDomain: "clean-t.firebaseapp.com",
    projectId: "clean-t",
    storageBucket: "clean-t.appspot.com",
    messagingSenderId: "481357577774",
    appId: "1:481357577774:web:7fbc78d01e38c3a63669bf",
    measurementId: "G-Y8JMMSDQKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storageFB = getStorage(app)

