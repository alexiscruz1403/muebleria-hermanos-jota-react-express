import "../css/Home.css";
import { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { ProductList } from "../components/ProductList/ProductList";
import { getDestacados } from "../services/getDestacados";
import { useNavigate } from "react-router-dom";

function Home() {
  const [destacados, setDestacados] = useState([]);
  const navigate = useNavigate();

  const fetchDestacados = async () => {
    try{
      const data = await getDestacados();
      setDestacados(data);
    }catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDestacados();
  }, []);

  return (
    <div className="homeContainer">
      <div className="contenedor-i">
        <div className="wrap-i">
          <div className="box-i">
            <span>Calidad y diseño que se sienten desde el primer clic</span>
            <h1>HERMANOS JOTA</h1>
            <p>
              Materiales premium, procesos responsables y una estética
              atemporal. Descubrí por qué nuestros clientes vuelven una y otra
              vez.
            </p>
            <div className="botones-i">
              <button onClick={() => navigate("/contact")} className="btn1">
                Contacto
              </button>
              <button onClick={() => navigate("/products")} className="btn2">
                Productos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="destacados">
        <Header title="Productos Destacados" />
        <ProductList
          products={destacados}
          onProductSelect={(view, id) => navigate(view, id)}
        />
      </div>
    </div>
  );
}

export default Home;
