import "./CartFooter.css";

export const CartFooter = ({ products }) => {
    const totalAmount = products.reduce((acc, product) => acc + product.precio, 0).toFixed(2);

    return (
        <div id="carrito-total">
            <h3>Total: $<span id="total-amount">{totalAmount}</span></h3>
            <button id="checkout-button">Proceder al Pago</button>
        </div>
    );
}