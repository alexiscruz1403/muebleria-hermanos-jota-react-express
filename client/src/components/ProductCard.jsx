import "../css/ProductCard.css";

export const ProductCard = ({ product, onSelect }) => {
    return (
        <div className="card">
            <img src={`imgs/${product.img.src}`} alt={product.img.alt} />
            <div className="card-content">
                <h2>{product.nombre}</h2>
                <p>${product.precio}</p>
                <button className="detail-link" onClick={() => onSelect("detail", product.id)}> Ver detalles</button>
            </div>
        </div>
    );
}
