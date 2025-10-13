import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, userName }) => {
  return (
    <header className="relative py-4 border-b border-white/10">
       <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 flex items-center gap-4">
        {isLoggedIn && userName && (
          <span className="text-[var(--color-text-secondary)] text-sm hidden sm:block">
            Hola, <span className="font-semibold text-[var(--color-text-primary)]">{userName}</span>
          </span>
        )}
        {isLoggedIn && (
          <button
            onClick={onLogout}
            className="bg-gray-700/60 hover:bg-red-600/80 border border-gray-600 hover:border-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
          >
            Cerrar Sesión
          </button>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text pt-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Generador de Playlists con IA
        </h1>
        <p className="mt-2 text-lg text-[var(--color-text-secondary)] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Crea la playlist perfecta para cualquier momento.
        </p>
      </div>
    </header>
  );
};

export default Header;
