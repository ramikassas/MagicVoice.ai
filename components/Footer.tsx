
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-black mb-2">MagicVoice<span className="text-purple-400">.ai</span></div>
          <p className="text-slate-500 text-sm max-w-xs">
            A premium digital asset presented by Rare Domains Marketplace.
            All logos and trademarks belong to their respective owners.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="text-sm font-medium text-slate-400">
            Developed & Designed by <span className="text-white">Rami Kassas</span>
          </div>
          <div className="text-xs text-slate-600">
            Founder of <a href="https://rdm.bz" className="hover:text-purple-400 transition-colors">Rare Domains Marketplace (rdm.bz)</a>
          </div>
          <div className="mt-4 flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>© {currentYear} MagicVoice.ai</span>
            <a href="https://rdm.bz/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://rdm.bz/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
