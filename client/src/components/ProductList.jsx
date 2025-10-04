import "../css/ProductList.css";
import { ProductCard } from "./ProductCard";    

export const ProductList = ({ products = [], onProductSelect }) => {
    return(
        <div>
            <div id="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onSelect={onProductSelect} />
                ))}
            </div>
            <div id="errors-container">

            </div>
        </div>
    );
}