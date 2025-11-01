import "./ProductDetailCard.css";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../services/deleteProduct";

export const ProductDetailCard = ({ product, onAddToCart }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirm = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if(confirm){
            try{
                await deleteProduct(product.id);
                navigate('/products');
            }catch(error){
                console.error("Error deleting product:", error);
            }
        }
    }
    
    return (
        <article>
            <div class="detail-container">    
            {/* <!-- Imagen del producto --> */}
            <figure class="media">
                <img id="imagenProducto" src={`http://localhost:4000${product.img.src}`} alt={product.img.alt} />
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
                                <th>{key.toUpperCase()}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="actions">
                    <button type="button" className="edit-button" onClick={() => {navigate(`/admin/actualizar-producto/${product.id}`)}}>Editar</button>
                    <button type="button" className="delete-button" onClick={handleDelete}>Eliminar</button>
                </div>
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