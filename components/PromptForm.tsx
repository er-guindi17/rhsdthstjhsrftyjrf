import React from 'react';
import MagicIcon from './icons/MagicIcon';
import UserIcon from './icons/UserIcon.tsx';
import ArtistSearchModal from './ArtistSearchModal';

interface PromptFormProps {
  prompt: string;
  // FIX: Argument of type '(prev: any) => string' is not assignable to parameter of type 'string'. Changed type to allow functional updates.
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  spotifyToken: string | null;
}

const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading, spotifyToken }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  const handleArtistSelect = (artistName: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const artistText = `"${artistName}" `;
        
        const newPrompt = text.substring(0, start) + artistText + text.substring(end);
        setPrompt(newPrompt);

        // Retraso mínimo para permitir que React actualice el estado antes de enfocar
        setTimeout(() => {
            textarea.focus();
            const newCursorPos = start + artistText.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    } else {
        // Fallback si la referencia no está disponible
        setPrompt(prev => (prev.trim() ? `${prev.trim()} "${artistName}"` : `"${artistName}"`));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between items-center">
          <label htmlFor="prompt" className="block text-lg font-medium text-[var(--color-text-primary)]">
            Describe el ambiente de tu playlist...
          </label>
           <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            disabled={isLoading || !spotifyToken}
            className="bg-gray-700/60 hover:bg-gray-700 border border-gray-600 text-gray-300 font-semibold py-1.5 px-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all duration-200"
          >
            <UserIcon />
            @ Artistas
          </button>
        </div>
        <div className="relative">
          <textarea
            ref={textareaRef}
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: Quiero una playlist con música tipo 'JC Reyes'"
            className="w-full h-28 p-4 bg-gray-900/50 border-2 border-[var(--color-border)] rounded-lg focus:ring-4 focus:ring-[var(--color-accent-glow)] focus:border-[var(--color-accent)] transition-all duration-300 resize-none text-[var(--color-text-primary)] placeholder-gray-500"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] focus:ring-[var(--color-accent)] shadow-lg hover:shadow-[var(--color-accent-glow)]"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generando...
            </>
          ) : (
            <>
              <MagicIcon />
              Generar Playlist
            </>
          )}
        </button>
      </form>
      {spotifyToken && (
        <ArtistSearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onArtistSelect={handleArtistSelect}
          token={spotifyToken}
        />
      )}
    </>
  );
};

export default PromptForm;
