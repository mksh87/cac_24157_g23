import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "El nombre es obligatorio";
    if (!formData.email)
      formErrors.email = "El correo electrónico es obligatorio";
    if (!formData.message) formErrors.message = "El mensaje es obligatorio";
    if (!formData.gender) formErrors.gender = "El género es obligatorio";
    if (!formData.terms)
      formErrors.terms = "Debe aceptar los términos y condiciones";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Enviar el formulario
      console.log("Formulario enviado:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="formContainer">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit} id="reserva">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Deje aquí su mensaje"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>

        <div>
          <label>Motivo de contacto:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="male">Consulta generales</option>
            <option value="female">Reservar una cabaña</option>
            <option value="female">Reclamos o feedback</option>
          </select>
          {errors.gender && <span>{errors.gender}</span>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            Deseo recibir noticias sobre ofertas de veraneo.
          </label>
          {errors.terms && <span>{errors.terms}</span>}
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary px-3 d-none d-lg-flex"
          >
            Enviar
          </button>
        </div>
      </form>{" "}
    </div>
  );
};

export default ContactForm;
