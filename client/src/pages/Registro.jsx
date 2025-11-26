import { useState, useContext } from "react";
import { LoaderModal } from "../components/LoaderModal";
import { register } from "../services/authService";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
    const [formValues, setFormValues] = useState({
        nombre: "",
        email: "",
        contrasenia: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState("");

    const { onLoginSuccess } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e, field) => {
        setFormValues({
            ...formValues,
            [field]: e.target.value,
        });

        if (formErrors[field]) {
            validateSingle(field, e.target.value);
        }
    }

    const validateAll = () => {
        const fields = Object.keys(formValues);
        const errors = {};
        fields.forEach(f => {
            if(!formValues[f].trim()) errors[f] = `El campo ${f} es obligatorio`;

            if(f === "email" && formValues[f] && !/\S+@\S+\.\S+/.test(formValues[f])) errors[f] = "El correo electrónico no es válido";

            if(f === "contrasenia" && formValues[f] && formValues[f].length < 8) errors[f] = "La contraseña debe tener al menos 8 caracteres";
        })

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const validateSingle = (field, value) => {
        let error = "";

        if(!value.trim()) error = `El campo ${field} es obligatorio`;

        if(field === "email" && value && !/\S+@\S+\.\S+/.test(value)) error = "El correo electrónico no es válido";

        if(field === "contrasenia" && value && value.length < 8) error = "La contraseña debe tener al menos 8 caracteres";

        setFormErrors({
            ...formErrors,
            [field]: error,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setRegisterError("");

        try{
            if(validateAll()){
                setLoading(true);
                const response = await register(formValues.nombre, formValues.email, formValues.contrasenia);
                console.log("Usuario registrado:", response);
                onLoginSuccess(response.token, response.user);
                navigate("/");
            }
        }catch(error){
            console.error("Error al registrar usuario:", error);
            setRegisterError(error.response?.data?.message || "Error al registrar usuario. Por favor, intentá nuevamente.");
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="p-4 bg-[#f4e4d0] flex items-center justify-center px-4">
            <div className="bg-[#f8f0e3] shadow-lg rounded-2xl p-8 w-full max-w-md border border-[#c9a27e]">
                <h2 className="text-3xl font-bold text-center text-[#7a4b2d] mb-6">
                Crear Cuenta
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-[#7a4b2d] font-medium mb-1" htmlFor="nombre">
                        Nombre completo
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            className="w-full px-4 py-2 border border-[#c9a27e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b4753d] bg-white/70"
                            placeholder="Juan Pérez"
                            value={formValues.nombre}
                            onChange={(e) => handleChange(e, "nombre")}
                        />
                        {formErrors.nombre && <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>}
                    </div>

                    <div>
                        <label className="block text-[#7a4b2d] font-medium mb-1" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border border-[#c9a27e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b4753d] bg-white/70"
                            placeholder="ejemplo@correo.com"
                            value={formValues.email}
                            onChange={(e) => handleChange(e, "email")}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-[#7a4b2d] font-medium mb-1" htmlFor="contrasenia">
                            Contraseña
                        </label>
                        <input
                            id="contrasenia"
                            type="password"
                            className="w-full px-4 py-2 border border-[#c9a27e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b4753d] bg-white/70"
                            placeholder="********"
                            value={formValues.contrasenia}
                            onChange={(e) => handleChange(e, "contrasenia")}
                        />
                        {formErrors.contrasenia && <p className="text-red-500 text-sm mt-1">{formErrors.contrasenia}</p>}
                    </div>

                    {registerError && (
                        <div>
                            <p className="text-red-500 text-sm mt-1">{registerError}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#b4753d] text-white font-semibold py-2 rounded-lg hover:bg-[#8b5930] transition-colors"
                        onClick={handleSubmit}
                    >
                        Registrarse
                    </button>
                </form>

                <p className="text-center text-[#7a4b2d] mt-6">
                    ¿Ya tenés una cuenta?{" "}
                    <a href="/login" className="font-semibold text-[#b4753d] hover:underline">
                        Iniciá sesión
                    </a>
                </p>
            </div>
            {loading && <LoaderModal />}
        </div>
    );
}
