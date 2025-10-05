import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const Navbar = ({ navigate, cartCount }) => {
    const[menuActivate,setMenuActivate]=useState(false);
    
    const toggleMenu=()=>{
        setMenuActivate(!menuActivate);
    }

  return (
    <header id="BarraDeNavegacion">
      <nav id="Navegador">
        {/* Logo */}
        <div className="LogoYNombre">
          <a href="index.html">
            <img src={logo} alt="Mueblería Jota" />
          </a>
          <h1 className="Content">Hermanos Jota</h1>
        </div>

        <button
          className="MenuToggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`ListaNav ${menuActivate ? "active" : ""}`}>
          <li className="Links">
            <button onClick={() => navigate("home")}>Home</button>
          </li>
          <li className="Links">
            <button onClick={() => navigate("products")}>Productos</button>
          </li>
          <li className="Links">
            <button onClick={() => navigate("contact")}>Contacto</button>
          </li>

          <li className="Links carrito">
            <button onClick={() => navigate("cart")}>
              <div>🛒 Carrito</div>
              <div id="counter-container">
                <span id="counter">{cartCount}</span>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
