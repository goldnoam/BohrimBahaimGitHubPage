
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
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    
    setIsPlaying(true);
    const success = await speakText(text);
    if (success !== undefined) {
      setIsPlaying(false);
    }
  };

  return (
    <button 
      onClick={handleSpeak}
      title={isPlaying ? "עצור הקראה" : "הקרא טקסט"}
      aria-label={isPlaying ? "עצור הקראה של טקסט זה" : "הקרא טקסט זה בקול"}
      aria-pressed={isPlaying}
      className={`p-2 rounded-full transition-all flex items-center justify-center border border-transparent focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none
        ${isPlaying 
          ? 'animate-pulse text-indigo-600 bg-indigo-50' 
          : 'text-slate-400 hover:text-indigo-600 bg-white/80 hover:bg-white hover:scale-110 shadow-sm border-slate-100'
        } ${className}`}
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h6v4H9z" />
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
