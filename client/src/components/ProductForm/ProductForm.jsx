import "./ProductForm.css";
import { useState } from "react";

export const ProductForm = ({ defaultValues = {}, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        nombre: defaultValues.nombre || "",
        precio: defaultValues.precio || "",
        descripcion: defaultValues.descripcion || "",
        especificaciones: defaultValues.especificaciones || [],
    })

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const [nuevasEspecificaciones, setNuevasEspecificaciones] = useState([]);

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const validateForm = () => {
        const { nombre, precio, descripcion, especificaciones } = formValues;
        const errors = {};

        if (!nombre.trim()) errors.nombre = "El nombre es obligatorio.";
        if(!precio) errors.precio = "El precio es obligatorio.";
        else if(isNaN(precio) || Number(precio) <= 0) errors.precio = "El precio debe ser un número positivo.";
        if (!descripcion.trim()) errors.descripcion = "La descripción es obligatoria.";

        especificaciones.forEach((spec, index) => {
            if (!spec.value.trim()) {
                errors[`especificacion_${index}`] = "El valor de la especificación es obligatorio.";
            }
        });

        nuevasEspecificaciones.forEach((spec, index) => {
            if (!spec.label.trim() || !spec.value.trim()) {
                errors[`especificacion_nueva_${index}`] = "La etiqueta y el valor de la especificación son obligatorios.";
            }
        })

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) onSubmit({...formValues, especificaciones: [...formValues.especificaciones, ...nuevasEspecificaciones], imgFile: file});
    }

    return(
        <form action="" onSubmit={handleSubmit} className="product-form">
            {(defaultValues.img && defaultValues.img.src && !file) && (
                <div className="product-image">
                    <img src={`http://localhost:4000${defaultValues.img.src}`} alt={defaultValues.img.alt || "Imagen del producto"} />
                </div>
            )}

            {preview && (
                <div className="product-image">
                    <img src={preview} alt="Vista previa de la imagen del producto" />
                </div>
            )}

            <input type="file" accept="image/*" onChange={handleFileChange} />

            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="nombre" className="input-label">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formValues.nombre} onChange={handleChange} />
                    {formErrors.nombre && 
                        <label htmlFor="nombre" className="error">{formErrors.nombre}</label>
                    }
                </div>
            </div>

            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="descripcion" className="input-label">Descripción</label>
                    <textarea id="descripcion" name="descripcion" value={formValues.descripcion} onChange={handleChange} rows={10}/>
                    {formErrors.descripcion && 
                        <label htmlFor="descripcion" className="error">{formErrors.descripcion}</label>
                    }
                </div>
            </div>

            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="precio" className="input-label">Precio</label>
                    <input type="number" step="0.01" id="precio" name="precio" value={formValues.precio} onChange={handleChange} />
                    {formErrors.precio && 
                        <label htmlFor="precio" className="error">{formErrors.precio}</label>
                    }
                </div>
            </div>

            <div className="form-specs">
                <div className="specs-header">
                    <h3>Especificaciones</h3>
                    <button onClick={() => setNuevasEspecificaciones([...nuevasEspecificaciones, { label: "", value: "" }])} type="button" className="specs-button">Agregar</button>
                </div>
                {formValues.especificaciones.map((spec, index) => (
                    <div className="form-group-container" key={`specs-${index}`}>
                        <div key={index} className="form-group">
                            <label className="input-label">{spec.label.toUpperCase()}</label>
                            <input type="text" value={spec.value} onChange={(e) => {
                                const newSpecs = [...formValues.especificaciones];
                                newSpecs[index] = { ...newSpecs[index], value: e.target.value };
                                setFormValues({ ...formValues, especificaciones: newSpecs });
                            }} />
                            <button onClick={() => {
                                const newSpecs = [...formValues.especificaciones];
                                newSpecs.splice(index, 1);
                                setFormValues({ ...formValues, especificaciones: newSpecs });
                            }}>
                                X
                            </button>
                        </div>
                        <div>
                            {formErrors[`especificacion_${index}`] && 
                                <label className="error">{formErrors[`especificacion_${index}`]}</label>
                            }
                        </div>
                    </div>
                ))}
                <div className="form-new-specs">
                    {nuevasEspecificaciones.map((spec, index) => (
                        <div className="form-group-container" key={`new-specs-${index}`}>
                            <div key={index} className="form-group">
                                <input type="text" placeholder="Etiqueta" value={spec.label} onChange={(e) => {
                                    const newSpecs = [...nuevasEspecificaciones];
                                    newSpecs[index] = { ...newSpecs[index], label: e.target.value };
                                    setNuevasEspecificaciones(newSpecs);
                                }} />
                                <input type="text" placeholder="Valor" value={spec.value} onChange={(e) => {
                                    const newSpecs = [...nuevasEspecificaciones];
                                    newSpecs[index] = { ...newSpecs[index], value: e.target.value };
                                    setNuevasEspecificaciones(newSpecs);
                                }} />
                                <button onClick={() => {
                                    const newSpecs = [...nuevasEspecificaciones];
                                    newSpecs.splice(index, 1);
                                    setNuevasEspecificaciones(newSpecs);
                                }}>
                                    X
                                </button>
                            </div>
                            <div>
                                {formErrors[`especificacion_nueva_${index}`] && 
                                    <label className="error">{formErrors[`especificacion_nueva_${index}`]}</label>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="form-submit">
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}