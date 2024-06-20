import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../firebase.config'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const provider = new GoogleAuthProvider()

export const useAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            navigate('/user-page')
        } catch(error) {
            console.log(error)
        }
    }
    
    const login = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate('/user-page')
        } catch(error) {
            console.log(error)
        }
    }
    
    const logout = async () => {
        await signOut(auth)
    }
    
    const signInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            dispatch(showUserPreference())
            navigate('/user-page')
            console.log(user)
        } catch(error) {
            console.log(error)
        }
    }

    return {
        register,
        login,
        logout,
        signInWithGoogle
    }
}