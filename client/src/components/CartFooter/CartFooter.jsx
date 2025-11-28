import "./CartFooter.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cartContext";

export const CartFooter = () => {
    const { cart } = useContext(CartContext);
    const totalAmount = cart.reduce((acc, product) => acc + product.precio, 0).toFixed(2);

    return (
        <div id="carrito-total">
            <h3>Total: $<span id="total-amount">{totalAmount}</span></h3>
            <button id="checkout-button">Proceder al Pago</button>
        </div>
    );
}