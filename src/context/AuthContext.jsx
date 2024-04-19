import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setIsLoggedIn(!isLoggedIn)
        })

        return ()=> unsub();
    },[])

    return(
        <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}