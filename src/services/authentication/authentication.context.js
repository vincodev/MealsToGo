import React, { useState, createContext, } from "react";
import { firebaseinit } from "../../../app/index";


import "firebase/compat/auth";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


    const auth = getAuth(firebaseinit)

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });



    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        const auth = getAuth(appfire);
        createUserWithEmailAndPassword(auth, email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });

    };

    const onLogout = () => {
        const auth = getAuth();
        setUser(null);
        signOut(auth);
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}