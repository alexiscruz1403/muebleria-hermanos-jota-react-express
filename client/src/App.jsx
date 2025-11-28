import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { MiPerfil } from "./pages/MiPerfil";
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoute } from './components/AdminRoute';

function App() {
  const { isAuthenticated, decodeToken } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      decodeToken();
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/crear-producto' element={<AdminRoute> <CrearProducto /> </AdminRoute>} />
        <Route path='/admin/actualizar-producto/:id' element={<AdminRoute> <ActualizarProducto /> </AdminRoute>} />
        <Route path='/mi_perfil' element={<ProtectedRoute> <MiPerfil /> </ProtectedRoute>} />
      </Routes>
    </Layout>
  );
}

export default App;
