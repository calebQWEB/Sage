import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVilgTUbH_Go1DdkJe9sxZjiBSddz1qRc",
    authDomain: "sage-d9319.firebaseapp.com",
    projectId: "sage-d9319",
    storageBucket: "sage-d9319.appspot.com",
    messagingSenderId: "64557909213",
    appId: "1:64557909213:web:c5797e0e448bbdfcea8734",
    measurementId: "G-94C266CFQF"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)