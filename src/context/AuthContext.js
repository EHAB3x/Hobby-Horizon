import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const login = (data)=>{
        setIsLoggedIn(true);
        setUser(data);
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, user, login}}>
            {children}
        </AuthContext.Provider>
    )
}