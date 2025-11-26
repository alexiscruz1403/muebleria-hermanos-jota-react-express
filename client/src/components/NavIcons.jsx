import { ShoppingCart, User } from "lucide-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

export const NavIcons = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const cartItemCount = 3; // Ejemplo de cantidad de items en el carrito
    const { user, onLogoutSuccess } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirm = window.confirm("¿Estás seguro que deseas cerrar sesión?");
        if (confirm) {
            onLogoutSuccess();
            navigate("/");
        }
    }

    return (
        <div className="hidden md:flex items-center gap-6">
            {/* Carrito con badge */}
            <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#C47A6D] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartItemCount}
                    </span>
                )}
            </div>

            {/* Usuario con dropdown */}
            <div className="relative">
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C47A6D] hover:bg-[#A85F52] transition-colors"
                >
                    <User className="w-5 h-5 text-white" />
                </button>

                {openMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#C47A6D] rounded-lg shadow-md border border-[#e5e7eb] z-10">
                        <div className="px-4 py-3 border-b border-[#e5e7eb]">
                            <p className="text-white text-base font-semibold text-center">
                                Hola, {user.nombre}
                            </p>
                        </div>
                        <ul>
                            <li>
                                <button className="w-full px-4 py-2 text-sm text-white text-left hover:bg-[#b86a5e] transition-colors duration-200">
                                    Mi perfil
                                </button>
                            </li>
                            <li className="border-t border-[#e5e7eb] py-1">
                                <button
                                    className="w-full px-4 py-2 text-sm text-white text-left hover:bg-[#b86a5e] transition-colors duration-200"
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}