import "../css/Cart.css";
import { CartList } from "../components/CartList/CartList";
import { CartFooter } from "../components/CartFooter/CartFooter";

export const Cart = ({ products, onRemove }) => {
    return (
        <>
            {products.length === 0 ? (
                <h2 id="empty-message">El carrito está vacío</h2>
            ) : (
                <div id="carrito-container">
                    
                    <CartList products={products} onRemove={onRemove} />
                    <CartFooter products={products} />
                </div>
            )}
        </>
    );
}