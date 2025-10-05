import "./Input.css";

export const Input = ({ id, label, type = "text", placeholder, value, onChange, error }) => {
    return (
        <div class="c-field">
            <label for={id}>{label}</label>
            {type === "textarea" ? (
                <textarea id={id} name={id} placeholder={placeholder} value={value} onChange={onChange}></textarea>
            ) : (
                <input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            )}
            <small class="c-error" id={`err-${id}`} aria-live="polite">{error}</small>
        </div>
    );
}