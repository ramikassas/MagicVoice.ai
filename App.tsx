import React from 'react';
import Hero from './components/Hero';
import DemoLive from './components/DemoLive';
import DemoTTS from './components/DemoTTS';
import DemoVeo from './components/DemoVeo';
import DemoTranscribe from './components/DemoTranscribe';
import DemoAnalysis from './components/DemoAnalysis';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      <Hero />
      
      {/* Domain Value Props */}
      <section className="py-32 px-4 bg-black/40 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">Why MagicVoice.ai?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A premium domain isn't just a name; it's a foundation for a billion-dollar brand. 
              Here is why <span className="text-white font-semibold">MagicVoice.ai</span> is the perfect asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                  </div>
                  <div className="text-4xl mb-6 p-4 bg-purple-500/20 w-fit rounded-2xl text-purple-300">✨</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Unforgettable Branding</h3>
                  <p className="text-gray-400 leading-relaxed">
                    "Magic" implies ease and wonder. "Voice" defines the medium. Combined, they create a brand that promises effortless, superior audio technology.
                  </p>
              </div>
              
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.66 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                  </div>
                  <div className="text-4xl mb-6 p-4 bg-blue-500/20 w-fit rounded-2xl text-blue-300">🎙️</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Industry Authority</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dominate the Voice AI market. Whether it's for TTS, Speech-to-Text, or Voice Cloning, this domain establishes instant trust and leadership.
                  </p>
              </div>

              <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.94-.94 2.56-.27 2.56 1.06v11.38c0 1.33-1.62 2-2.56 1.06z"/></svg>
                  </div>
                  <div className="text-4xl mb-6 p-4 bg-pink-500/20 w-fit rounded-2xl text-pink-300">🚀</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Scalable Future</h3>
                  <p className="text-gray-400 leading-relaxed">
                    The .ai extension is the digital real estate of the decade. Secure an asset that appreciates as the AI revolution accelerates.
                  </p>
              </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Static Illustrations */}
      <section className="py-24 px-4 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] -z-10"></div>
        
        <div className="max-w-7xl mx-auto mb-20">
             <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Limitless Possibilities</h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Imagine the products you could build on this foundation. 
                        From personal assistants to enterprise analytics.
                    </p>
                </div>
                <div className="text-right hidden md:block">
                    <span className="text-purple-400 font-mono">Use Case Gallery</span>
                </div>
             </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
            <DemoLive />
            <DemoTTS />
            <DemoVeo />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <DemoTranscribe />
                <DemoAnalysis />
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-purple-900/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Ready to own the future?</h2>
            <p className="text-xl text-gray-300 mb-12">
                Opportunities like <span className="text-white font-bold">MagicVoice.ai</span> are rare. 
                Secure your brand's voice before someone else does.
            </p>
            <a 
                href="https://www.atom.com/name/MagicVoice.ai" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-bold text-2xl rounded-full hover:scale-105 transition-transform shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            >
                Buy MagicVoice.ai
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest">
                Protected Transaction via Atom Premium Marketplace
            </p>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold tracking-tight">MagicVoice<span className="text-purple-500">.ai</span></div>
            <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved. Domain available for purchase.
            </div>
            <a href="https://www.atom.com/name/MagicVoice.ai" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                View Listing on Atom &rarr;
            </a>
        </div>
      </footer>
    </div>
  );
};

export default App;