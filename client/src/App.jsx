import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { CrearProducto } from './pages/CrearProducto';
import { ActualizarProducto } from './pages/ActualizarProducto';
import { Registro } from './pages/Registro';
import { Login } from './pages/Login';
import { AuthContext } from './contexts/auth/AuthContext';
import { useContext } from 'react';

function App() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    if(!cartProducts.find(p => p.id === product.id)) {
      setCartProducts([...cartProducts, product]);
    }
    navigate('/cart');
  }

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter(p => p.id !== productId));
  }

  const { isAuthenticated, decodeToken } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      decodeToken();
    }
  }, [isAuthenticated]);

  return (
    <Layout cartCount={cartProducts.length}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path='/cart' element={<Cart products={cartProducts} onRemove={removeFromCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/crear-producto' element={<CrearProducto />} />
        <Route path='/admin/actualizar-producto/:id' element={<ActualizarProducto />} />
      </Routes>
    </Layout>
  );
}

export default App;
