import React from 'react';

const DemoLive: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
            Concept One
        </div>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            The Next Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Voice Assistant</span>
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
            MagicVoice.ai is the perfect home for a real-time, low-latency conversational AI. 
            Imagine a Siri or Alexa competitor with a name that implies wonder, speed, and intelligence.
        </p>
        <ul className="space-y-4 pt-4">
            {['Customer Support Agents', 'Smart Home Control', 'Interactive Gaming NPCs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                </li>
            ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a1a] shadow-2xl aspect-square md:aspect-[4/3] group">
            {/* Visualizer Mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-purple-500/50 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-1 items-end h-16">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className={`w-2 bg-purple-400 rounded-full animate-bounce`} style={{ height: `${Math.random() * 100}%`, animationDuration: `${0.5 + Math.random()}s` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-gray-400 uppercase">System Status</span>
                    </div>
                    <div className="text-sm font-mono text-purple-200">
                        &gt; Listening to user input...<br/>
                        &gt; Processing natural language...<br/>
                        &gt; MagicVoice AI Response generated.
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default DemoLive;