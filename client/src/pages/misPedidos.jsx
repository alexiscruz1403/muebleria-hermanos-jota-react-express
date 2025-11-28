import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export const MisPedidos = () => {
  const { token } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/pedidos/mis_pedidos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log("📩 data en front:", data);

        if (!response.ok) {
          alert(data.message || "Error al cargar pedidos");
          return;
        }

        // ⬅️ CAMBIO IMPORTANTE
        setPedidos(Array.isArray(data.pedidos) ? data.pedidos : []);
      } catch (error) {
        console.error("Error cargando pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [token]);

  if (loading) return <p>Cargando pedidos...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mis Pedidos</h2>

      {pedidos.length === 0 ? (
        <p>No tenés pedidos realizados.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pedidos.map((pedido) => (
            <li
              key={pedido._id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "8px",
                backgroundColor: "#fdf7f2",
              }}
            >
              <h3>Pedido #{pedido._id}</h3>
              <p>
                <strong>Fecha:</strong>{" "}
                {new Date(pedido.fecha).toLocaleString()}
              </p>
              <p>
                <strong>Total:</strong> ${pedido.total}
              </p>

              <p>
                <strong>Productos:</strong>
              </p>

              <ul>
                {(Array.isArray(pedido.productos) ? pedido.productos : []).map(
                  (prod) => (
                    <li key={prod}>{prod}</li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
