import React from 'react';

const DemoVeo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-widest">
            Concept Three
        </div>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Cinematic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">AI Video Production</span>
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
            The future of content creation is generative video. 
            Brand a platform that allows creators to conjure visuals from their voice or text prompts.
        </p>
        <div className="p-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-2xl border border-pink-500/20">
            <h4 className="font-bold text-white mb-2">Ideal for SaaS:</h4>
            <div className="flex flex-wrap gap-2">
                {['Marketing Tools', 'Social Media Shorts', 'Film Pre-visualization', 'Educational Content'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-500/20 text-pink-200 rounded-lg text-sm border border-pink-500/20">{tag}</span>
                ))}
            </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a1a] shadow-2xl aspect-video group">
            {/* Abstract Video Placeholder */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-10 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <div className="px-4 py-2 bg-black/50 backdrop-blur rounded-lg text-sm font-mono text-pink-400 border border-pink-500/30">
                            Prompt: "A futuristic neon city..."
                        </div>
                     </div>
                </div>
            </div>
            
            {/* Timeline UI */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent flex items-end px-6 pb-4">
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-pink-500"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVeo;