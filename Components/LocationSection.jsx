import React from "react";
import './LocationSection.css'

const LocationSection = () => {
  return (
    <div className="location-section">
      <h2>C. 619 & C. 545 El Pato Entrada por 545 QUINTA LA CIGARRA📍</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8008887024894!2d-58.1622902!3d-34.886345899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9b937ecd26f%3A0x8cc3e01f9d6d52f3!2sC.%20619%20%26%20C.%20545%2C%20El%20Pato%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739500879142!5m2!1ses-419!2sar"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationSection;
