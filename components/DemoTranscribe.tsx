import React from 'react';

const DemoTranscribe: React.FC = () => {
  return (
    <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
        <div className="bg-[#050510] rounded-[22px] p-8 h-full border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            
            <div className="mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Media Intelligence</h3>
                <p className="text-gray-400 text-sm">
                    Perfect for a B2B platform analyzing meetings, calls, and videos. 
                    "MagicVoice" suggests extracting hidden value from audio data.
                </p>
            </div>

            {/* Static UI */}
            <div className="bg-black/40 rounded-xl border border-white/10 p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Transcription Progress</span>
                    <span className="text-green-400">100% Complete</span>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                    <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                </div>
                <div className="pt-2 flex gap-2">
                    <span className="px-2 py-1 bg-green-900/20 text-green-400 text-[10px] rounded border border-green-500/20">Sentiment: Positive</span>
                    <span className="px-2 py-1 bg-blue-900/20 text-blue-400 text-[10px] rounded border border-blue-500/20">Speakers: 3</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DemoTranscribe;