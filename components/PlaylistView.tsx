import React from 'react';
import type { Playlist } from '../types';
import SpotifyIcon from './icons/SpotifyIcon';
import MusicNoteIcon from './icons/MusicNoteIcon';

interface PlaylistViewProps {
  playlist: Playlist;
  onCreateSpotify: () => void;
  onRegenerate: () => void;
  isLoading: boolean;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({ playlist, onCreateSpotify, onRegenerate, isLoading }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          {playlist.playlistName}
        </h2>
        <p className="mt-2 text-[var(--color-text-secondary)]">{playlist.description}</p>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {playlist.songs.map((song, index) => (
          <div 
            key={`${song.title}-${index}`} 
            className="group flex items-center gap-4 p-3 bg-gray-900/50 hover:bg-gray-800/70 rounded-lg transition-all duration-200 animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-gray-600 group-hover:text-[var(--color-accent)] transition-colors">
              <MusicNoteIcon />
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-[var(--color-text-primary)]">{song.title}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{song.artist} — {song.album}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={onCreateSpotify}
          disabled={isLoading}
          className="w-full flex-1 flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] focus:ring-[var(--color-accent)] shadow-lg hover:shadow-[var(--color-accent-glow)]"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creando en Spotify...
            </>
          ) : (
            <>
              <SpotifyIcon />
              Crear en Spotify
            </>
          )}
        </button>
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="w-full flex-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:-translate-y-0.5"
        >
          Generar Otra
        </button>
      </div>
    </div>
  );
};

export default PlaylistView;
