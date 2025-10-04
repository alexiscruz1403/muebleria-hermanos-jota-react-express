import { products } from '../data/products';//'../data/products'

function ProductosList() {
  return (
    <div className="productos">
      {products.map((p) => (
        <div key={p.id} className="producto">
          <img src={p.img.src} alt={p.img.alt} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
 export default ProductosList;