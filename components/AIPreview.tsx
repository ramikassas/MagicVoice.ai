
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIPreview: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [idea, setIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    if (!industry || loading) return;
    setLoading(true);
    setIdea(null);
    try {
      // In Vercel, API_KEY should be set in environment variables
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a creative brand consultant for a premium domain trader. The domain name is 'MagicVoice.ai'. Based on the industry '${industry}', generate a one-sentence visionary startup idea that makes this domain look like a multi-million dollar asset. Format: "Imagine [Startup Name] using MagicVoice.ai to [Action]..."`,
      });
      
      const resultText = response.text;
      if (resultText) {
        setIdea(resultText);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      console.error("AI Generation Error:", error);
      setIdea("Imagine a world where audio meets intelligence at MagicVoice.ai - a hub for the next generation of voice synthesis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto glass p-10 rounded-[2.5rem] border-purple-500/20 text-center">
        <h2 className="text-3xl font-bold mb-4">Conceptualize Your Vision</h2>
        <p className="text-slate-400 mb-8">Type an industry to see how MagicVoice.ai could dominate it.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="e.g. Healthcare, Space Tech, Luxury Retail..."
            className="flex-1 px-6 py-4 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateIdea()}
          />
          <button 
            onClick={generateIdea}
            disabled={loading || !industry}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40 min-w-[160px]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
              </span>
            ) : "Generate Concept"}
          </button>
        </div>

        {idea && (
          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-xl italic text-purple-200 animate-in fade-in slide-in-from-bottom-4 duration-700">
            "{idea}"
          </div>
        )}
      </div>
    </section>
  );
};
