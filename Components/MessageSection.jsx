import React, { useState, useEffect } from "react";

const MessageSection = ({ onComplete }) => {
  const messages = [
    "Ya cumplí años hace un mes...",
    "¿Sí? ¿Y? ¿Qué me importa papaaaa? 🤷‍♂️",
    "Lo festejamos igual 🎉",
    "📅 El lunes 3/3 a las 10:30hs",
    "🏖️ Pool Party por mi cumpleaños 🏊‍♂️",
    "🍾 Traé tu bebida y traje de baño 🩳",
    "DONDE????",
  ];
  
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (currentMessage < messages.length - 1) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => prev + 1);
      }, 2500);

      return () => clearInterval(interval);
    } else {
      // Llamar a onComplete cuando termina el último mensaje
      setTimeout(onComplete, 2500);
    }
  }, [currentMessage, onComplete]);

  return <h2>{messages[currentMessage]}</h2>;
};

export default MessageSection;
