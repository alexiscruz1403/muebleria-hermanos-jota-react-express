import "./ProductDetailCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart/cartContext";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { deleteProduct } from "../../services/productService";

export const ProductDetailCard = ({ product, onAddToCart }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

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

    const handleAddToCart = () => {
        addToCart(product);
        onAddToCart();
    }
    
    return (
        <article>
            <div class="detail-container">    
            {/* <!-- Imagen del producto --> */}
            <figure class="media">
                <img id="imagenProducto" src={`${BASE_URL}${product.img.src}`} alt={product.img.alt} />
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
                {user && user.rol === "admin" &&(
                    <div className="actions">
                        <button type="button" className="edit-button" onClick={() => {navigate(`/admin/actualizar-producto/${product.id}`)}}>Editar</button>
                        <button type="button" className="delete-button" onClick={handleDelete}>Eliminar</button>
                    </div>
                )}
            </section>
            {/* <!-- Precio y boton --> */}
            <section class="acciones">
                <p class="precio" id="precio">${product.precio}</p>
                <button id="btnAdd" onClick={handleAddToCart}>Añadir al carrito</button>
            </section>
            </div>
        </article>
    );
}