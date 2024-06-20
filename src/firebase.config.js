import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBPOZSG4wf1Sk43sCg0c6n56p39-YHFzt4",
    authDomain: "sages-6536c.firebaseapp.com",
    projectId: "sages-6536c",
    storageBucket: "sages-6536c.appspot.com",
    messagingSenderId: "549261103124",
    appId: "1:549261103124:web:d72e326ffd4e02de69d701",
    measurementId: "G-VMP8HD10GH"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app)