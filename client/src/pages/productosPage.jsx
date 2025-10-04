import React from "react";
import '../css/global.css';
import '../css/componentes.css';
import '../css/index.css';
import Productos from "../utils/ProductosList";

function productosPage() {
  return (
    <main>
        <h1>CATÁLOGO DE PRODUCTOS</h1>
        <div id="search-container">
            <div id="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="search-input" placeholder="Buscar productos..."/>
            </div>
        </div>
        <div id="products-grid">
            <Productos />
        </div>
        <div id="errors-container">
            
        </div>
    </main>
  );
}

export default productosPage;