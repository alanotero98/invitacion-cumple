import React, { useState } from "react";

const AcceptanceForm = () => {
  const [name, setName] = useState("");

  const handleAccept = () => {
    const phoneNumber = "5491170038287"; // Reemplaza con el número de WhatsApp del cumpleañero
    const message = `¡Hola! Soy ${name} y confirmo mi asistencia a tu cumpleaños 🎉.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="acceptance-form">
      <h3>Confirmar asistencia</h3>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAccept}>Acepto mi invitación</button>
    </div>
  );
};

export default AcceptanceForm;
