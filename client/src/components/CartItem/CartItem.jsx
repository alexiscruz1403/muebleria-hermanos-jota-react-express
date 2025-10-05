import "./CartItem.css";

export const CartItem = ({ product, onRemove }) => {
    return (
        <div className="item" key={product.id}>
            <img src={`imgs/${product.img.src}`} alt={product.img.alt} />
            <h4>{product.nombre}</h4>
            <p>Precio: ${product.precio.toFixed(2)}</p>
            <button className="remove-item" onClick={() => onRemove(product.id)}>Eliminar</button>
        </div>
    );
}