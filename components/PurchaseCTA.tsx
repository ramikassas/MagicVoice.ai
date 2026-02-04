
import React from 'react';

export const PurchaseCTA: React.FC = () => {
  return (
    <section id="purchase" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass p-10 md:p-20 rounded-[3rem] border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        
        <h2 className="text-4xl md:text-5xl font-black mb-6">Acquire MagicVoice.ai Today</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Secure this asset immediately through your preferred marketplace. Instant transfer is available for all platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* RDM.bz - Best Value */}
          <div className="order-1 md:order-2 p-1 rounded-3xl bg-gradient-to-b from-purple-500 to-blue-600 shadow-2xl shadow-purple-500/20 scale-105">
            <div className="bg-slate-950 rounded-[1.4rem] p-8 h-full flex flex-col justify-between items-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-600 text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-tighter">
                Direct Buy
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <span className="text-2xl font-bold text-white">RDM</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Direct Acquisition</h3>
                <p className="text-slate-400 text-sm mb-8">Official marketplace of Rare Domains. Secure escrow-backed transaction.</p>
              </div>
              <a 
                href="https://rdm.bz/domain/magicvoice.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-slate-200 transition-colors"
              >
                Acquire Directly <br />
                <span className="text-[10px] opacity-70 tracking-tight uppercase">(Save Marketplace Fees)</span>
              </a>
              <div className="mt-4 text-[10px] text-purple-400 font-bold uppercase tracking-widest">Best Value Option</div>
            </div>
          </div>

          {/* Atom.com */}
          <div className="order-2 md:order-1 glass p-8 rounded-3xl flex flex-col justify-between items-center hover:bg-white/5 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="https://www.atom.com/favicon.ico" alt="Atom" className="w-8 h-8 rounded" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Atom.com</h3>
              <p className="text-slate-400 text-sm mb-8">Premium brand marketplace with excellent protection tools.</p>
            </div>
            <a 
              href="https://www.atom.com/name/MagicVoice.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 glass border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center"
            >
              Buy on Atom
            </a>
          </div>

          {/* GoDaddy.com */}
          <div className="order-3 md:order-3 glass p-8 rounded-3xl flex flex-col justify-between items-center hover:bg-white/5 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="https://s23.q4cdn.com/406380394/files/design/2020/final/Desktop_White.svg" alt="GoDaddy" className="w-8 h-8 rounded" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GoDaddy</h3>
              <p className="text-slate-400 text-sm mb-8">World's largest registrar. Simple checkout and trusted service.</p>
            </div>
            <a 
              href="https://godaddy.com/forsale/Magicvoice.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 glass border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center"
            >
              Buy on GoDaddy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
