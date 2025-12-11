import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#030014]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse delay-2000 transform -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="z-10 px-4 max-w-6xl mx-auto space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-sm font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Premium Domain Available
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9]">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">MagicVoice</span>
          <span className="text-purple-500">.ai</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          The ultimate identity for the next generation of <span className="text-white font-medium">Voice AI</span>, <span className="text-white font-medium">Generative Audio</span>, and <span className="text-white font-medium">Sonic Branding</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <a 
            href="https://www.atom.com/name/MagicVoice.ai" 
            target="_blank" 
            rel="noreferrer"
            className="group relative px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_rgba(255,255,255,0.6)] hover:scale-105 flex items-center gap-3"
          >
            <span>Buy Now on Atom</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          
          <div className="flex gap-8 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
             <div className="flex flex-col text-left">
               <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Extension</span>
               <span className="text-white font-mono text-lg">.ai</span>
             </div>
             <div className="w-px bg-white/10"></div>
             <div className="flex flex-col text-left">
               <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Category</span>
               <span className="text-white font-mono text-lg">Premium</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Explore Potential</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;