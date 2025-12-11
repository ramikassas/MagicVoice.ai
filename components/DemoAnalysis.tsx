import React from 'react';

const DemoAnalysis: React.FC = () => {
  return (
    <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
        <div className="bg-[#050510] rounded-[22px] p-8 h-full border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            
            <div className="mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Voice Analytics</h3>
                <p className="text-gray-400 text-sm">
                    Build a dashboard for call centers or sales teams. 
                    Monitor clarity, emotion, and conversion metrics powered by AI.
                </p>
            </div>

            {/* Static UI */}
            <div className="bg-black/40 rounded-xl border border-white/10 p-4 relative">
                <div className="flex items-end gap-2 h-24 mb-2 px-2">
                    {[40, 70, 45, 90, 65, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-orange-500/50 to-orange-400 rounded-t-sm relative group/bar">
                            <div className="absolute bottom-0 w-full bg-orange-500 transition-all duration-1000" style={{ height: `${h}%` }}></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-mono border-t border-white/10 pt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                
                <div className="absolute top-2 right-2 flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DemoAnalysis;