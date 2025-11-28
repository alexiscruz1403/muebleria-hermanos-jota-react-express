import "./CartItem.css";

export const CartItem = ({ product, onRemove }) => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

    return (
        <div className="item" key={product.id}>
            <img src={`${BASE_URL}${product.img.src}`} alt={product.img.alt} />
            <h4>{product.nombre}</h4>
            <p>Precio: ${product.precio.toFixed(2)}</p>
            <button className="remove-item" onClick={() => onRemove(product.id)}>Eliminar</button>
        </div>
    );
}