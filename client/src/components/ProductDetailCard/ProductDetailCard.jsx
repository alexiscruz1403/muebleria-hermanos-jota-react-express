import "./ProductDetailCard.css";

export const ProductDetailCard = ({ product, onAddToCart }) => {
    const labels = {
        medidas: "Medidas",
        materiales: "Materiales",
        acabado: "Acabado",
        peso: "Peso",
        capacidad: "Capacidad",
        modulares: "Modulares",
        tapizado: "Tapizado",
        confort: "Confort",
        rotacion: "Rotación",
        garantia: "Garantía",
        cargaMaxima: "Carga máxima",
        almacenamiento: "Almacenamiento",
        caracteristicas: "Características",
        colchon: "Colchon",
        estructura: "Estructura",
        relleno: "Relleno",
        sostenibilidad: "Sostenibilidad",
        extension: "Extension",
        apilable: "Apilables",
        incluye: "Incluye",
        cable: "Cables",
        regulacion: "Regulación",
        certificacion: "Certificación",
    };
    
    return (
        <article>
            <div class="detail-container">    
            {/* <!-- Imagen del producto --> */}
            <figure class="media">
                <img id="imagenProducto" src={`imgs/${product.img.src}`} alt={product.img.alt} />
            </figure>
            {/* <!-- Información del producto --> */}
            <section class=" infoProducto">
                <h1 id="nombreProducto">{product.nombre}</h1>
                <p id="descripcionProducto">{product.descripcion}</p>

                {/* <!-- Tabla de especificaciones-- el JS genera las filas --> */}
                <table class="fichaTecnica">
                    <tbody id="tablaDetalles">
                        {product.especificaciones && Object.entries(product.especificaciones).map(([key, value]) => (
                            <tr key={key}>
                                <th>{labels[key] || key}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            {/* <!-- Precio y boton --> */}
            <section class="acciones">
                <p class="precio" id="precio">${product.precio}</p>
                <button id="btnAdd" onClick={() => onAddToCart(product)}>Añadir al carrito</button>
            </section>
            </div>
        </article>
    );
}