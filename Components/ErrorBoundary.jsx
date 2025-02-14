import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };  // Si ocurre un error, se cambia el estado
  }

  componentDidCatch(error, info) {
    console.error("Error capturado:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal al cargar el contenido del video.</h1>;
    }

    return this.props.children;
  }
}

function MyComponent() {
  return (
    <ErrorBoundary>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Dpm_vumUQ_4?si=xYNGxxso0JKsLjtN"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </ErrorBoundary>
  );
}

export default MyComponent;
