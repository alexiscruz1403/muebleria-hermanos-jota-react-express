import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

export const AdminRoute = ({ children }) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (user && user.rol !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
}