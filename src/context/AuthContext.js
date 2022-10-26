import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase';
import { useState } from 'react';

export const AuthenticContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const userLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        setLoading(false)
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        setLoading(false)
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        setLoading(false)
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Inside Auth State Changed', currentUser)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { user, loading, createUser, verifyEmail, userLogIn, signIn, updateUserProfile, logOut }
    return (
        <AuthenticContext.Provider value={authInfo}>
            {children}
        </AuthenticContext.Provider>
    );
};

export default AuthContext;