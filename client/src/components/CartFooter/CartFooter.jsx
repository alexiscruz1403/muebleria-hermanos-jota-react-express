import "./CartFooter.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cartContext";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const CartFooter = () => {
    const { cart, clearCart } = useContext(CartContext);
    const { isAuthenticated, token } = useContext(AuthContext);

    const totalAmount = cart.reduce((acc, product) => acc + product.precio, 0).toFixed(2);
    
    const navigate = useNavigate();

    const handleCheckout = async () => {

        if (!isAuthenticated) {
            alert("Debes iniciar sesión para finalizar la compra");
            navigate("/login");
            return;
        }
        if (cart.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }

        try {
          const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";
          const response = await fetch(
            `${BASE_URL}/pedidos/crear_pedido`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                productos: cart.map((p) => p._id), // mandamos los ids
                total: Number(totalAmount),
              }),
            }
          );

        const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Error al crear el pedido");
                return;
            }

            alert("Pedido creado con éxito");

            clearCart(); // vaciar carrito

            navigate("/mis_pedidos"); // redirigir a pedidos


       } catch (error) {
         console.error(error);
         alert("Error de conexión con el servidor");
       }
     };
    
    return (
      <div id="carrito-total">
        <h3>
          Total: $<span id="total-amount">{totalAmount}</span>
        </h3>
        <button id="checkout-button" onClick={handleCheckout}>
          Finalizar Compra
        </button>
      </div>
    );
}