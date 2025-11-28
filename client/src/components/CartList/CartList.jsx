import "./CartList.css";
import { CartItem } from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cartContext";

export const CartList = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div id="carrito-items">
            {cart.map(product => (
                <CartItem key={product.id} product={product} onRemove={removeFromCart} />
            ))}
        </div>
    );
}
