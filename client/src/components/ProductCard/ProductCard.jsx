import "./ProductCard.css";

export const ProductCard = ({ product, onSelect, loading }) => {
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
                <img src={`imgs/${product.img.src}`} alt={product.img.alt} />
                <div className="card-content">
                    <h2>{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <button className="detail-link" onClick={() => onSelect("detail", product.id)}> Ver detalles</button>
                </div>
            </div>
        )
    );
}
