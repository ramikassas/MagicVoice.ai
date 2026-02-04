
import React from 'react';

const industries = [
  {
    title: "Content Creation",
    description: "Empower YouTubers and Podcasters with hyper-realistic AI narrators. MagicVoice.ai is the perfect home for a high-end TTS platform.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500/20"
  },
  {
    title: "Accessibility",
    description: "Giving voice to the voiceless. Use MagicVoice for assistive tech that converts text to natural, emotionally intelligent speech.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500/20"
  },
  {
    title: "Customer Success",
    description: "Revolutionize call centers with 24/7 AI agents that sound human. Scalable, brandable, and premium audio identity.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-500/20"
  },
  {
    title: "Game Development",
    description: "Dynamic NPCs with voices that adapt to gameplay. MagicVoice.ai provides a prestigious portal for gaming audio engines.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    color: "from-indigo-500/20"
  }
];

export const Simulations: React.FC = () => {
  return (
    <section id="simulations" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry Simulations</h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Visualizing how <span className="text-white font-medium">MagicVoice.ai</span> transforms complex tech into a household brand across diverse vertical markets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((item, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden glass border-white/5 h-[400px]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent ${item.color}`} />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
