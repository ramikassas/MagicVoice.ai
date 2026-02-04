
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-8 uppercase tracking-widest">
        Premium Domain Asset
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
        Own the Future of Sound: <br />
        <span className="magic-text">MagicVoice.ai</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
        This page is a professional simulation demonstrating the immense potential of 
        <span className="text-white font-semibold"> MagicVoice.ai</span>. 
        A versatile brandable identity perfect for AI text-to-speech, audio synthesis, and revolutionary sound technologies.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#purchase" 
          className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-1"
        >
          View Purchase Options
        </a>
        <a 
          href="https://rdm.bz/domain/magicvoice.ai" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
        >
          Contact Broker
        </a>
      </div>

      <div className="mt-12 text-sm text-slate-500 italic">
        "One of the most brandable voice-AI assets on the market today."
      </div>
    </section>
  );
};
