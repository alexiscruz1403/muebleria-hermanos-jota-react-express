import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("authToken") || null);

    const isAuthenticated = !!token;

    const onLoginSuccess = (newToken, newUser) => {
        setToken(newToken);
        localStorage.setItem("authToken", newToken);
        setUser(newUser);
    }

    const onLogoutSuccess = () => {
        setToken(null);
        localStorage.removeItem("authToken");
        setUser(null);
    }

    const decodeToken = () => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, setToken, isAuthenticated, decodeToken, onLoginSuccess, onLogoutSuccess }}>
            {children}
        </AuthContext.Provider>
    );
}