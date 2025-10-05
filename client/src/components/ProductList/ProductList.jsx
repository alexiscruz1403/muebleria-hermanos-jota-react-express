import "./ProductList.css";
import { ProductCard } from "../ProductCard/ProductCard";    

export const ProductList = ({ products = [], onProductSelect, loading }) => {
    return(
        <div>
            {products.length === 0 && !loading && 
                <div id="errors-container">
                    <h2>No se encontraron productos</h2>
                </div>
            }
            <div id="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onSelect={onProductSelect} 
                        loading={loading} 
                    />
                ))}
            </div>
        </div>
    );
}