
import React, { useState, useRef, useEffect } from 'react';
import { FeedbackMessage } from '../types';

const FeedbackChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<FeedbackMessage[]>([
    { id: '1', role: 'system', text: 'שלום! נשמח לשמוע את דעתך על האתר או לקבל הצעות לשיפור.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMsg: FeedbackMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate feedback submission response
    setTimeout(() => {
      const systemMsg: FeedbackMessage = {
        id: (Date.now() + 1).toString(),
        role: 'system',
        text: 'תודה רבה על המשוב! הוא הועבר לצוות הפיתוח שלנו במייל noamgoldai@gmail.com.'
      };
      setMessages(prev => [...prev, systemMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 ${isOpen ? 'w-[calc(100%-2rem)] md:w-96' : 'w-auto'}`}>
      {isOpen ? (
        <div className="bg-white h-[450px] md:h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-indigo-600 p-3 md:p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">✍️</span>
              <span className="font-bold text-sm md:text-base">שלחו משוב</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors p-1">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`${msg.role === 'user' ? 'chat-message-user' : 'chat-message-system'} text-sm max-w-[90%]`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="chat-message-system flex gap-1 items-center py-2 px-3">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 md:p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="כתבו כאן..."
                className="flex-1 bg-slate-100 border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-all disabled:opacity-50 transform active:scale-95 shrink-0"
              >
                <svg className="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white w-12 h-12 md:w-auto md:px-4 md:py-4 rounded-full shadow-xl hover:bg-indigo-700 transition-all transform hover:scale-110 flex items-center justify-center group active:scale-90"
          aria-label="שלחו משוב"
        >
          <span className="text-xl md:text-2xl group-hover:rotate-12 transition-transform">📧</span>
          <span className="mr-2 font-bold hidden md:inline">שלחו משוב</span>
        </button>
      )}
    </div>
  );
};

export default FeedbackChat;
