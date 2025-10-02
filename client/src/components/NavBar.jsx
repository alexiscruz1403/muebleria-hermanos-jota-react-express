import React,{useState} from "react";
import logo from "../assets/logo.svg";
import "../css/NavBar.css";

const Navbar = () => {
    const[menuActivate,setMenuActivate]=useState(false);
    const [showLogin, setShowLogin] = useState(true);
    
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
            <button onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "Registro" : "Login"}
            </button>
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
