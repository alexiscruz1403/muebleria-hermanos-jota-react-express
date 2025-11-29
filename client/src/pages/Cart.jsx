import "../css/Cart.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cart/cartContext";
import { CartList } from "../components/CartList/CartList";
import { CartFooter } from "../components/CartFooter/CartFooter";

export const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <h2 id="empty-message">El carrito está vacío</h2>
            ) : (
                <div id="carrito-container">
                    <CartList />
                    <CartFooter />
                </div>
            )}
        </>
    );
}