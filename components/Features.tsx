
import React from 'react';

const features = [
  { title: "Short & Memorable", desc: "Just 10 characters. Two strong words that resonate globally." },
  { title: ".AI TLD", desc: "The gold standard for technology and artificial intelligence branding." },
  { title: "Keyword Rich", desc: "Contains both 'Magic' (branding) and 'Voice' (utility)." },
  { title: "Global Appeal", desc: "Understood in every language. Highly marketable internationally." },
  { title: "Ready for SEO", desc: "A clean history with zero penalties and massive potential for audio keywords." },
  { title: "High Authority", desc: "An asset that screams market leadership and innovation." }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why MagicVoice.ai?</h2>
        <p className="text-slate-400">The breakdown of a top-tier digital asset.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
            <div className="text-purple-500 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">{f.title}</h4>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
