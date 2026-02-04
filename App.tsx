
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
    // Inject JSON-LD Schema for SEO with all required fields to fix Google errors
    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "MagicVoice.ai Premium Domain",
      "image": "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200&h=630",
      "description": "MagicVoice.ai is a premium domain name for the AI, voice synthesis, and audio technology industries. Available for acquisition for $102,000.",
      "brand": {
        "@type": "Brand",
        "name": "MagicVoice"
      },
      "sku": "MV-AI-001",
      "offers": {
        "@type": "Offer",
        "url": "https://rdm.bz/domain/magicvoice.ai",
        "price": "102000.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
          "merchantReturnDays": "7",
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        },
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
