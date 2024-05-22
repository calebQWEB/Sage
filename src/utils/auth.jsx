import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../firebase.config'

const provider = new GoogleAuthProvider()

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
    } catch(error) {
        console.log(error)
    }
}

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        console.log(error)
    }
}

export const logout = async () => {
    await signOut(auth)
}

export const signInWithGoogle = async () => {
    try {
        const user = await signInWithPopup(auth, provider)
    } catch(error) {
        console.log(error)
    }
}