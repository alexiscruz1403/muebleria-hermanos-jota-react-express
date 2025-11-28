import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { CartContext } from "../../contexts/cart/cartContext";
import { NavLink } from "../NavLink";
import { NavIcons } from "../NavIcons";
import { Menu } from "lucide-react"
import logo from "../../assets/logo.svg";

const Navbar = () => {
    const[menuActivate,setMenuActivate]=useState(false);
    const { cart } = useContext(CartContext);
    const cartCount = cart.length;

    const { isAuthenticated, onLogoutSuccess, user } = useContext(AuthContext);
    console.log("Navbar user:", user);
    const navigate = useNavigate();
    
    const toggleMenu=()=>{
        setMenuActivate(!menuActivate);
    }

    const handleLogout = () => {
        const confirm = window.confirm("¿Estás seguro que deseas cerrar sesión?");
        if (confirm) {
            onLogoutSuccess();
            navigate("/");
        }
    }

  return (
    <header className="sticky top-0 z-10 bg-[#F5E6D3]">
      <nav className="flex justify-between items-center p-2 md:p-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10"/>
          </Link>
          <h1 className="text-[#A0522D] text-center font-['Playfair Display'] tracking-widest">HERMANOS JOTA</h1>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-[#C47A6D]"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <Menu size={30}/>
        </button>

        <ul className={`bg-[#C47A6D] md:bg-transparent absolute md:relative top-12 md:top-0 right-0 p-2 ${menuActivate ? "flex flex-col md:flex-row gap-2 rounded-md shadow-md md:rounded-none md: shadow-none" : "hidden md:flex gap-2"}`} onClick={toggleMenu}>
          <NavLink to="/" label="Inicio" />
          <NavLink to="/products" label="Productos" />
          <NavLink to="/contact" label="Contacto" />
          {isAuthenticated && (
            <>
              <NavLink to="/products" label="Mi carrito" onlyOnMobile />
              <NavLink to="/mi_perfil" label="Mi perfil" onlyOnMobile />
              {user && user.rol === "admin" && (
                <NavLink to="/admin/crear-producto" label="Crear producto" />
              )}
              <button className="md:hidden w-full text-left px-3 text-[#F5E6D3] py-2 hover:bg-[#A85F52] transition-colors font-semibold" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <NavLink to="/login" label="Iniciar sesión" onlyOnMobile />
              <NavLink to="/registro" label="Registrarse" onlyOnMobile />
            </>
          )}
        </ul>

        <ul className="hidden md:flex items-center">
          {isAuthenticated ? 
            (
              <NavIcons cartCount={cartCount}/>
            ) : 
            (
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                  <Link to="/login" className="px-5 py-2 bg-[#A0522D] text-[#F5E6D3] rounded-md hover:bg-[#8B3E20] hover:text-gray-100 transition-colors duration-300 shadow-sm">
                    Iniciar sesion
                  </Link>
                  <Link to="/registro" className="px-5 py-2 bg-[#87A96B] text-[#F5E6D3] rounded-md hover:bg-[#6F8C56] hover:text-gray-100 transition-colors duration-300 shadow-md">
                    Registrarse
                  </Link>
              </div>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
