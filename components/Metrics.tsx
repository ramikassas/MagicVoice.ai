
import React from 'react';

export const Metrics: React.FC = () => {
  const metrics = [
    { label: "Search Volume", value: "High", detail: "Global Voice-AI Trend", icon: "📈" },
    { label: "CPC Potential", value: "$25.00", detail: "Average Industry Lead", icon: "💰" },
    { label: "Domain Age", value: "7 Years", detail: "Established Authority", icon: "⏳" },
    { label: "Extension", value: ".AI", detail: "The Standard for Innovation", icon: "🤖" },
  ];

  return (
    <section id="metrics" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl border-white/10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-110" />
            <div className="text-3xl mb-4">{metric.icon}</div>
            <div className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">{metric.label}</div>
            <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
            <div className="text-xs text-slate-500">{metric.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
