import React from 'react';

const DemoTTS: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest">
            Concept Two
        </div>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Human-Like <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Text-to-Speech Platform</span>
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
            Audiobooks, podcasts, and video narration are exploding markets. 
            "MagicVoice" perfectly describes the capability to turn cold text into warm, human speech.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-bold text-white">Audiobooks</div>
                <div className="text-xs text-gray-500">Narrate books instantly</div>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">🎙️</div>
                <div className="font-bold text-white">Voice Cloning</div>
                <div className="text-xs text-gray-500">Custom brand voices</div>
             </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a1a] shadow-2xl p-6 group">
            {/* UI Mockup */}
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="font-bold text-lg">Text to Speech Engine</div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">Pro Version</div>
                </div>
                
                <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-2 w-full bg-gray-700 rounded animate-pulse delay-75"></div>
                    <div className="h-2 w-5/6 bg-gray-700 rounded animate-pulse delay-150"></div>
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-white/5 mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-xs text-gray-400">Generated Audio Waveform</div>
                        <div className="text-xs text-blue-400">00:14 / 02:30</div>
                    </div>
                    <div className="flex items-center gap-1 h-12">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div 
                                key={i} 
                                className="w-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full"
                                style={{ height: `${20 + Math.random() * 80}%`, opacity: Math.random() > 0.5 ? 1 : 0.5 }}
                            ></div>
                        ))}
                    </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-black">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div className="h-10 flex-1 rounded-full bg-white/10"></div>
                </div>
            </div>
            
            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default DemoTTS;