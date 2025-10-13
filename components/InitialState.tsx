import React from 'react';

interface InitialStateProps {
  onSuggestionClick: (prompt: string) => void;
}

const InitialState: React.FC<InitialStateProps> = ({ onSuggestionClick }) => {
  const examples = [
    "Temas de 'JC Reyes' y 'Luar La L'",
    "Playlist inspirada en 'Luar La L'",
    "Mezcla con temas tipo 'ROA'",
    "Canciones que suenen como 'JC Reyes'",
  ];

  const handleChipClick = (prompt: string) => {
    onSuggestionClick(prompt);
  };

  return (
    <div className="text-center p-8 animate-fade-in-up">
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
        Tu próxima playlist favorita te espera
      </h3>
      <p className="mt-2 text-[var(--color-text-secondary)]">
        Usa el campo de arriba para decirle a la IA lo que te apetece.
      </p>
      <div className="mt-8">
        <h4 className="font-semibold text-gray-400 mb-4">O prueba una de estas ideas:</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {examples.map((ex, index) => (
            <button
              key={ex}
              onClick={() => handleChipClick(ex)}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              "{ex}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitialState;
