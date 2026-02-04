
import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight italic">
          "Don't just build a product. <br />
          <span className="magic-text">Build a Category.</span>"
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed mb-12">
          The voice-AI market is projected to reach <span className="text-white font-bold">$40+ Billion</span> by 2030. 
          A domain like MagicVoice.ai doesn't just sit in a browser—it defines the standard. 
          It tells your customers that your technology isn't just code; it's magic.
        </p>
      </div>
    </section>
  );
};
