import "./ProductList.css";
import { ProductCard } from "../ProductCard/ProductCard";    

/*export const ProductList = ({ products = [], onProductSelect, loading }) => {
    return (
      <div>
        {products.length === 0 && !loading && (
          <div id="errors-container">
            <h2>No se encontraron productos</h2>
          </div>
        )}
        <div id="products-grid">
          {products.map((product) => (
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
}*/

export const ProductList = ({ products = [], onProductSelect, loading }) => {
  const productsArray = Array.isArray(products) ? products : [];

  return (
    <div>
      {productsArray.length === 0 && !loading && (
        <div id="errors-container">
          <h2>No se encontraron productos</h2>
        </div>
      )}
      <div id="products-grid">
        {productsArray.map((product) => (
          <ProductCard
            key={product._id || product.id} // MongoDB usa _id
            product={product}
            onSelect={onProductSelect}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};