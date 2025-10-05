import "./CartList.css";
import { CartItem } from "../CartItem/CartItem";

export const CartList = ({ products, onRemove }) => {
    return (
        <div id="carrito-items">
            {products.map(product => (
                <CartItem key={product.id} product={product} onRemove={onRemove} />
            ))}
        </div>
    );
}
