import React from 'react';
import SpotifyIcon from './icons/SpotifyIcon';

interface LoginProps {
  onLogin: () => void;
  error?: string | null;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="aurora-background"></div>
      <div className="w-full max-w-md text-center bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 shadow-2xl backdrop-blur-lg space-y-8 animate-scale-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Generador de Playlists con IA
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Convierte tus ideas en playlists de Spotify perfectamente seleccionadas.
          </p>
          <p className="mt-2 text-gray-500">
            Conecta tu cuenta de Spotify para empezar.
          </p>
        </div>

        {error && (
          <div className="bg-red-900/30 border border-red-500 text-red-300 p-3 rounded-lg text-sm">
            <p className="font-semibold">Error de Autenticación</p>
            <p className="mt-1 text-red-400">{error}</p>
          </div>
        )}

        <button
          onClick={onLogin}
          className="w-full inline-flex items-center justify-center gap-3 bg-[#1DB954] hover:bg-[#1ED760] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-100 focus:outline-none focus:ring-4 focus:ring-green-500/50 shadow-lg hover:shadow-green-500/40"
        >
          <SpotifyIcon />
          Conectar con Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
