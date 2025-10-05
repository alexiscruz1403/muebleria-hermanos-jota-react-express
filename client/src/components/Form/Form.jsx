import "./Form.css";
import { Input } from "../Input/Input";

export const Form = ({ inputs, onSubmit, success }) => {
    return (
        <form id="contactForm" class="c-form" novalidate onSubmit={onSubmit}>
            {inputs.map(input => (
                <Input key={input.id} {...input} />
            ))}

            <button class="c-btn c-btn--primary" type="submit">Enviar</button>
            {success &&
                <div id="formSuccess" class="c-success" role="status" aria-live="polite">
                    <p>¡Gracias! Recibimos tu consulta y te responderemos a la brevedad.</p>
                </div>
            }
        </form>
    );
}