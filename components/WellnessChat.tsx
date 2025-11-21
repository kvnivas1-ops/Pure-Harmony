import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const WellnessChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your wellness companion. I can offer a quick mindfulness tip or a positive affirmation. How are you feeling today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !process.env.API_KEY) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const prompt = `You are a gentle, supportive AI assistant for a counseling center called "Pure Harmony". 
      Your goal is to provide brief, calming, and positive responses. 
      If the user asks about booking, direct them to the "Book a Session" page.
      Do NOT provide medical diagnoses or crisis intervention. If a user seems in danger, tell them to contact emergency services immediately.
      Keep responses under 50 words.
      User says: ${userMsg}`;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      const text = response.text || "I'm having trouble connecting right now, but remember to take a deep breath.";
      setMessages(prev => [...prev, { text: text, isUser: false }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { text: "I'm taking a brief pause. Please try again in a moment.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Sparkles size={18} />
              <h3 className="font-medium">Wellness Companion</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.isUser
                    ? "ml-auto bg-purple-600 text-white rounded-tr-none"
                    : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
               <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-xl rounded-tl-none shadow-sm w-16 flex justify-center">
                 <Loader2 size={16} className="animate-spin" />
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="How are you feeling?"
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!process.env.API_KEY || isLoading}
              className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 font-medium ${
          isOpen 
            ? "bg-slate-800 text-white rotate-90 opacity-0 pointer-events-none absolute" 
            : "bg-gradient-to-r from-orange-400 to-purple-500 text-white hover:scale-105"
        }`}
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Chat with AI</span>
      </button>
    </div>
  );
};

export default WellnessChat;