import React, { useState, useRef } from "react";
import MessageSection from "../Components/MessageSection";
import LocationSection from "../Components/LocationSection";
import AcceptanceForm from "../Components/AcceptanceForm";
import "./App.css";

function App() {
  const [step, setStep] = useState(0); // Control de pasos
  const [showForm, setShowForm] = useState(false); // Control de estado del modal
  const audioRef = useRef(null); // Referencia para el elemento <audio>
  const [audioPlaying, setAudioPlaying] = useState(false); // Estado para controlar si se está reproduciendo el audio
  const [buttonVisible, setButtonVisible] = useState(true); // Control de visibilidad del botón

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Reproducir el audio cuando se haga clic en el botón
      setAudioPlaying(true); // Actualizar el estado para indicar que se está reproduciendo
      setButtonVisible(false); // Ocultar el botón después de hacer clic
    }
  };

  // Este paso solo se renderiza después de que el audio comienza a reproducirse
  const renderSteps = () => {
    if (!audioPlaying) return null; // No renderizar nada hasta que el audio se reproduzca

    return (
      <>
        {step === 0 && <MessageSection onComplete={() => setStep(1)} />}
        {step === 1 && !showForm && (
          <div className="location-container">
            <LocationSection />
            <button
              className="open-modal-btn"
              onClick={() => setShowForm(true)}
            >
              ✍️ Confirmar Asistencia
            </button>
          </div>
        )}
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-modal-btn"
                onClick={() => setShowForm(false)}
              >
                ❌
              </button>
              <AcceptanceForm />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="app-container">
      {/* Botón para activar el reproductor de audio, oculto después de hacer clic */}
      <button
        onClick={handlePlayAudio}
        style={{ display: buttonVisible ? "block" : "none" }}
      >
        Que empiece la joda
      </button>

      {/* Reproductor de audio oculto */}
      <audio
        ref={audioRef}
        controls
        loop
        style={{ display: "none" }} // Lo hace invisible hasta que el audio se reproduce
      >
        <source src="/brasilero.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      {/* Renderizado de secciones cuando el audio se está reproduciendo */}
      {renderSteps()}
    </div>
  );
}

export default App;
