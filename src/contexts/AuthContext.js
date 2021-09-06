// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    reauthenticateWithCredential,
    updateEmail,
    updatePassword,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

// Anything with access to custom hook, useAuth, will have access the AuthContext data -> value={value}
export function useAuth() {
    return useContext(AuthContext);
}

// note: Used in App.js - AuthProvider is AuthContext.Provider, read the comment on last return to understand
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function signup(username, email, password) {
        return createUserWithEmailAndPassword(auth, email, password).then(
            (cred) => {
                setDoc(doc(db, 'Users', cred.user.uid), {
                    userId: cred.user.uid,
                    username,
                });
            }
        );
    }

    async function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function logout() {
        return signOut(auth);
    }

    async function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    async function updateEmail(email) {
        return updateEmail(auth.currentUser, email);
    }

    async function updatePassword(password) {
        return updatePassword(auth.currentUser, password);
    }

    useEffect(() => {
        //* expected: When the auth state changes - user is available - set current user,
        //* then return unsubscribe (method) that basically stops the unsubscribe method from running again
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    //* AuthContext.Provider is a wrapper, to allow anything inside of it to have access to the data -> value={value}
    //* application doesnt render until user is set (onAuthStateChanged)
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
