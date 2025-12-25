
/**
 * Uses the native browser Web Speech API to read text aloud.
 * This works offline and does not require any external API keys.
 */
export async function speakText(text: string): Promise<boolean> {
  if (!('speechSynthesis' in window)) {
    console.error("Speech synthesis not supported in this browser.");
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to find a Hebrew voice
    const voices = window.speechSynthesis.getVoices();
    const hebrewVoice = voices.find(voice => voice.lang.includes('he') || voice.lang.includes('HE'));
    
    if (hebrewVoice) {
      utterance.voice = hebrewVoice;
    }
    
    utterance.lang = 'he-IL';
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1;

    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    window.speechSynthesis.speak(utterance);
  });
}
