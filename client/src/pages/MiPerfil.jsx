import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export const MiPerfil = () => {
  const { user, token, decodeToken, updateUser } = useContext(AuthContext);

  const [nombre, setNombre] = useState(user?.nombre || "");
  const [actualPassword, setActualPassword] = useState("");
  const [nuevaPassword, setNuevaPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {};

    if (nombre && nombre !== user.nombre) payload.nombre = nombre;
    if (actualPassword && nuevaPassword) {
      payload.currentPassword = actualPassword;
      payload.newPassword = nuevaPassword;
    }

    if (Object.keys(payload).length === 0) {
      setMensaje("No hay cambios para enviar.");
      return;
    }

    try {
      const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";
      const res = await fetch(`${BASE_URL}/user/mi_perfil`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(data.message || "Error al actualizar");
        return;
      }

      setMensaje("Perfil actualizado con éxito");

      // 🔄 Refresca datos en AuthContext (actualiza user)
      updateUser(data.token);

      // Limpia las contraseñas luego del cambio
      setActualPassword("");
      setNuevaPassword("");
    } catch (err) {
      setMensaje("Error de conexión con el servidor");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>

      {mensaje && (
        <p className="mb-4 text-center text-blue-600 font-medium">{mensaje}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Cambiar Nombre */}
        <div>
          <label className="block font-semibold mb-1">Nombre</label>
          <input
            className="border p-2 w-full rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <hr />

        {/* Cambiar Contraseña */}
        <h2 className="text-xl font-semibold">Cambiar contraseña</h2>

        <div>
          <label className="block font-semibold mb-1">Contraseña actual</label>
          <input
            type="password"
            className="border p-2 w-full rounded"
            value={actualPassword}
            onChange={(e) => setActualPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Nueva contraseña</label>
          <input
            type="password"
            className="border p-2 w-full rounded"
            value={nuevaPassword}
            onChange={(e) => setNuevaPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-[#C47A6D] text-white py-2 rounded hover:bg-[#A85F52] transition"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
};
export default MiPerfil;