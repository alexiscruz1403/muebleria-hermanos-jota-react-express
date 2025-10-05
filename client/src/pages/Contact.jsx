import "../css/Contact.css";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { Form } from "../components/Form/Form";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formSuccess, setFormSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(formErrors[name]) {
            if(name === "name") formErrors.name = validateName(value);
            if(name === "email") formErrors.email = validateEmail(value);
            if(name === "message") formErrors.message = validateMessage(value);
        };
        setFormData({ ...formData, [name]: value });
    }

    const validateName = (name) => {
        if (!name || name.trim().length < 3)
            return "Ingresá tu nombre (mín. 3 caracteres).";
        if (/\d/.test(name)) return "El nombre no debe contener números.";
        return "";
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.trim() === "") return "Ingresá tu correo electrónico.";
        if (!emailRegex.test(email)) return "Ingresá un correo electrónico válido.";
        return "";
    }

    const validateMessage = (message) => {
        if (!message || message.trim().length < 10)
            return "El mensaje debe tener al menos 10 caracteres.";
        return "";
    }

    const clearForm = () => {
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({ name: "", email: "", message: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        errors.name = validateName(formData.name);
        errors.email = validateEmail(formData.email);
        errors.message = validateMessage(formData.message);
        setFormErrors(errors);
        const hasErrors = Object.values(errors).some(error => error !== "");
        if (!hasErrors) {
            setFormSuccess(true);
            clearForm();
            setTimeout(() => setFormSuccess(false), 5000);
        } else {
            setFormSuccess(false);
        }
    }

    return (
        <div>
            <section class="c-card" aria-labelledby="c-title">
                <Header title="Nuestra ubicación" />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8782.281286391742!2d-65.41215190308273!3d-24.792753476691978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3af8301138b%3A0xee5732107b32849e!2sMuebler%C3%ADa%20del%20Milagro!5e0!3m2!1ses-419!2sar!4v1757281619701!5m2!1ses-419!2sar"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación" 
                />
            </section>
            <section class="c-card" aria-labelledby="c-title">
                <Header title="Horario de atención" info="Estamos para ayudarte en estos horarios:" />
                <Table
                    headers={["Día", "Horario"]}
                    data={[
                        { "Día": "Lunes a Viernes", "Horario": "08h ~ 20h" },
                        { "Día": "Sabados", "Horario": "10h ~ 15h" }
                    ]}
                />
            </section>
            <section class="c-card" aria-labelledby="c-title">
                <Header title="Contacto" info="Envíanos tu consulta o comentario completando el siguiente formulario:" />
                <Form 
                    inputs={[
                        { id: "name", label: "Nombre y Apellido", type: "text", name: "name", placeholder: "Tu nombre completo", required: true, value: formData.name, onChange: handleChange, error: formErrors.name },
                        { id: "email", label: "Correo Electrónico", type: "email", name: "email", placeholder: "tu@email.com", required: true, value: formData.email, onChange: handleChange, error: formErrors.email },
                        { id: "message", label: "Mensaje", type: "textarea", name: "message", placeholder: "Tu mensaje", required: true, value: formData.message, onChange: handleChange, error: formErrors.message }
                    ]} 
                    onSubmit={handleSubmit}
                    success={formSuccess}
                />
            </section>
        </div>
    );
}