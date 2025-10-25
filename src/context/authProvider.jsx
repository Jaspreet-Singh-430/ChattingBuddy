
import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const initialUserState = Cookies.get('jwt') || localStorage.getItem('messanger');
    const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined
    );

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=> useContext(AuthContext);

