import React from "react";
import '../css/global.css';
import '../css/componentes.css';
import '../css/index.css';
//
import Productos from "../utils/ProductosList";

function App() {
  return (
      <main>
        <div className="contenedor-i">
          <div className="wrap-i">
            <div className="box-i">
              <span>Calidad y diseño que se sienten desde el primer clic</span>
              <h1>HERMANOS JOTA</h1>
              <p>
                Materiales premium, procesos responsables y una estética
                atemporal. Descubrí por qué nuestros clientes vuelven una y otra
                vez.
              </p>
              <div className="botones-i">
                <a href="/contacto" className="btn1">
                  Contacto
                </a>
                <a href="/productos" className="btn2">
                  Productos
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="destacados"></div>
        <div id="gridDestacados"></div>
      </main>
  );
}

export default App;
