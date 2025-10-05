import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar/NavBar' ;
import Footer from "./components/Footer/Footer";
import Home from './pages/home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';

function App() {
  const [router, setRouter] = useState("home");
  const [productId, setProductId] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  const routerHandler = (route, id = null) => {
    setRouter(route);
    setProductId(id);
  }

  const addToCart = (product) => {
    if(!cartProducts.find(p => p.id === product.id)) {
      setCartProducts([...cartProducts, product]);
    }
    setRouter("cart");
  }

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter(p => p.id !== productId));
  }

  return (
    <div className='layout'>
      <NavBar navigate={routerHandler} cartCount={cartProducts.length}/>
      <main>
        {router === "home" && <Home navigate={routerHandler} />}
        {router === "products" && <Products navigate={routerHandler} />}
        {router === "detail" && <ProductDetail productId={productId} onAddToCart={addToCart} />}
        {router === "cart" && <Cart products={cartProducts} onRemove={removeFromCart}/>}
        {router === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
