
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Simulations } from './components/Simulations';
import { Metrics } from './components/Metrics';
import { PurchaseCTA } from './components/PurchaseCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { Vision } from './components/Vision';
import { AIPreview } from './components/AIPreview';

const App: React.FC = () => {
  useEffect(() => {
    // Inject JSON-LD Schema for SEO
    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "MagicVoice.ai Premium Domain",
      "image": "https://picsum.photos/seed/magicvoice/1200/630",
      "description": "MagicVoice.ai is a premium domain name for the AI, voice synthesis, and audio technology industries. Available for acquisition.",
      "brand": {
        "@type": "Brand",
        "name": "MagicVoice"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://magicvoice.rdm.bz/",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Rare Domains Marketplace (RDM)"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector('script[type="application/ld+json"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      <div className="fixed inset-0 pointer-events-none magic-bg z-0" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Metrics />
        <Simulations />
        <AIPreview />
        <Features />
        <Vision />
        <PurchaseCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
