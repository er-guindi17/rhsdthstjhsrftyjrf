import React, { useState, useEffect } from 'react';

interface LoaderProps {
  message?: string;
}

const loadingMessages = [
    "Consultando a DJs legendarios...",
    "Afinando las notas correctas...",
    "Buscando gemas ocultas en Spotify...",
    "Mezclando el ritmo perfecto...",
    "Sintonizando con tu vibra...",
    "Creando una experiencia sónica..."
];

const Loader: React.FC<LoaderProps> = ({ message }) => {
  const [dynamicMessage, setDynamicMessage] = useState(message || 'Cargando...');

  useEffect(() => {
    if (message) return; // Don't cycle if a specific message is passed
    
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * loadingMessages.length);
        setDynamicMessage(loadingMessages[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center p-8 animate-fade-in">
       <div className="relative h-12 w-12">
           <div className="absolute inset-0 rounded-full border-4 border-t-[var(--color-accent)] border-gray-700 animate-spin" style={{ animationDuration: '1s' }}></div>
           <div className="absolute inset-2 rounded-full bg-[var(--color-accent)]/20 animate-pulse"></div>
       </div>
      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] transition-opacity duration-500">
        {dynamicMessage}
      </h3>
      <p className="text-[var(--color-text-secondary)]">Por favor, espera un momento.</p>
    </div>
  );
};

export default Loader;
