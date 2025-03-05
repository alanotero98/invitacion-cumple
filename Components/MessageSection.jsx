import React, { useState, useEffect } from "react";

const MessageSection = ({ onComplete }) => {
  const messages = [
    { text: "Se viene se viene?" },
    { text: "''¿Sí? ¿que se viene contame? 🤷‍♂️''", image: "/fiesta/g.png" },
    { text: "Mi fc pedazo de gil pero remaster 2.0 🎉", image: "/fiesta/jc.png" },
    { text: "📅 Domingo 16 de Marzo" },
    { text: "🏖️ Quinta en varela 🏊‍♂️", image: "/fiesta/noba.png" },
    { text: "🍾 Traer droga y alcohol🩳", image: "/fiesta/mate.webp" },
    { text: "DONDE???" },
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    let delay = 2500; // Duración normal

    if (messages[currentMessage].text === "🍾 Traer droga y alcohol🩳") {
      delay = 5000; // Último mensaje con mate.webp dura 3s
    }

    if (currentMessage < messages.length - 1) {
      const interval = setTimeout(() => {
        setCurrentMessage((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(interval);
    } else {
      setTimeout(onComplete, delay);
    }
  }, [currentMessage, onComplete]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{messages[currentMessage].text}</h2>
      {messages[currentMessage].image && (
        <img
          src={messages[currentMessage].image}
          alt="Imagen relacionada"
          style={{ width: "280px", marginTop: "10px", borderRadius: "10px" }}
        />
      )}
    </div>
  );
};

export default MessageSection;
