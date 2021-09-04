// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../firebase/firebase';

const AuthContext = React.createContext();

// Anything with access to custom hook, useAuth, will have access the AuthContext data -> value={value}
export function useAuth() {
    return useContext(AuthContext);
}
//Todo: Convert to Firebase 9.0.0
// note: Used in App.js - AuthProvider is AuthContext.Provider, read the comment on last return to understand
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function signup(username, email, password) {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                firestore
                    .collection('Users')
                    .doc(cred.user.uid)
                    //Todo: Add stuff for settings here
                    .set({ userId: cred.user.uid, username });
            });
    }

    async function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    async function logout() {
        return auth.signOut();
    }

    async function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    async function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    async function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        //* expected: When the auth state changes - user is available - set current user,
        //* then return unsubscribe (method) that basically stops the unsubscribe method from running again
        const unsubscribe = auth.onAuthStateChanged((user) => {
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
