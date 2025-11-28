import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product, loading }) => {
    const navigate = useNavigate();

    const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
    
    return (
        loading ? (
            <div className="card loading">
                <div class="loading-image"></div>
                <div class="card-content loading">
                    <h2>Cargando</h2>
                    <p>Cargando</p>
                    <button class="detail-link loading">Cargando</button>
                </div>
            </div>
        ) : (
            <div className="card">
                <img src={`${BASE_URL}${product.img.src}`} alt={product.img.alt} />
                <div className="card-content">
                    <h2>{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <button className="detail-link" onClick={() => navigate(`/products/${product.id}`)}> Ver detalles</button>
                </div>
            </div>
        )
    );
}
