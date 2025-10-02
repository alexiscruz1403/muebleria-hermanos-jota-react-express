import React from "react";
import logo from "../assets/logo.svg";
import "../css/NavBar.css";

const Navbar = () => {
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

        <button className="MenuToggle" aria-label="Abrir menú">
          ☰
        </button>

        <ul className="ListaNav">
          <li className="Links">
            <a href="/">
              <button>Home</button>
            </a>
          </li>
          <li className="Links">
            <a href="/">
              <button>Productos</button>
            </a>
          </li>
          <li className="Links">
            <a href="/">
              <button>Contacto</button>
            </a>
          </li>
          <li className="Links">
            <a href="/">
              <button>Login</button>
            </a>
          </li>
          <li className="Links">
            <a href="/">
              <button>Registro</button>
            </a>
          </li>
          <li className="Links carrito">
            <a href="/">
              <button>
                <div>🛒 Carrito</div>
                <div id="counter-container">
                  <span id="counter">0</span>
                </div>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
