import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer id="PieDePagina">
      <p>&copy; 2025 Mueblería Jota - Todos los derechos reservados</p>
      <ul class="FooterNav">
        <li>
          <a href="contacto.html">Contacto</a>
        </li>
        <li>
          <a href="nosotros.html">Nosotros</a>
        </li>
        <li>
          <a href="terminos.html">Términos y Condiciones</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;