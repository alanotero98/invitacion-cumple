import React from "react";
import './LocationSection.css'

const LocationSection = () => {
  return (
    <div className="location-section">
      <h2>C. 619 & C. 545 El Pato Entrada por 545 QUINTA LA CIGARRA📍</h2>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3269.8839208246013!2d-58.26977492424422!3d-34.95951797282879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDU3JzM0LjMiUyA1OMKwMTYnMDEuOSJX!5e0!3m2!1ses-419!2sar!4v1741210530927!5m2!1ses-419!2sar"
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
