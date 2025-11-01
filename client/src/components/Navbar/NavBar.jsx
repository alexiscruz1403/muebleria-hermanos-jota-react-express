import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const Navbar = ({ cartCount }) => {
    const[menuActivate,setMenuActivate]=useState(false);
    const navigate = useNavigate();
    
    const toggleMenu=()=>{
        setMenuActivate(!menuActivate);
    }

  return (
    <header id="BarraDeNavegacion">
      <nav id="Navegador">
        {/* Logo */}
        <div className="LogoYNombre">
          <a href="/">
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
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li className="Links">
            <button onClick={() => navigate('/products')}>Productos</button>
          </li>
          <li className="Links">
            <button onClick={() => navigate('/contact')}>Contacto</button>
          </li>
          <li className="Links">
            <button onClick={() => navigate('/admin/crear-producto')}>Crear producto</button>
          </li>

          <li className="Links carrito">
            <button onClick={() => navigate('/cart')}>
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
