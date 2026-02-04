
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight">MagicVoice<span className="text-purple-400">.ai</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#metrics" className="hover:text-white transition-colors">Market Stats</a>
          <a href="#simulations" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#purchase" className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
};
