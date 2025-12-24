
import React, { useState } from 'react';
import { speakText } from '../services/ttsService';

interface SpeakButtonProps {
  text: string;
  className?: string;
}

const SpeakButton: React.FC<SpeakButtonProps> = ({ text, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;
    
    setIsPlaying(true);
    await speakText(text);
    setIsPlaying(false);
  };

  return (
    <button 
      onClick={handleSpeak}
      disabled={isPlaying}
      title="הקרא טקסט"
      className={`p-2 rounded-full hover:bg-slate-100 transition-colors flex items-center justify-center ${isPlaying ? 'animate-pulse text-indigo-500' : 'text-slate-400 hover:text-indigo-600'} ${className}`}
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
        </svg>
      )}
    </button>
  );
};

export default SpeakButton;
