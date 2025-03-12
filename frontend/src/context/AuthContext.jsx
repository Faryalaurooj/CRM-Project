import { createContext, useContext, useEffect, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Provide Auth Context to the app
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    // Function to handle login
    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
    };

    // Function to handle logout
    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

