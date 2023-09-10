"use client"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth'

import { createContext } from "react";
import app from "../../../firebase.confiq";

export const AuthContext = createContext();
const auth = getAuth(app)

const ProviderRoute = ({children})=>{
    const createUser = (email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const LoginUser=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const updateUserInfo=(user)=>{
        return updateCurrentUser(auth, user)
    }

    const authInfo={
        createUser,
        LoginUser,
        updateUserInfo
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default ProviderRoute;