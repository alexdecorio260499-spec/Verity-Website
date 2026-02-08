
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Booster from './components/Booster';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-green-100">
      {/* Top Banner */}
      <div className="bg-[#0c1a0c] text-white py-2 text-center text-[10px] md:text-xs font-medium tracking-wide uppercase px-4 sticky top-0 z-[60]">
        Now booking bespoke garden transformations for Autumn 2025. Limited slots available.
      </div>

      <Header scrolled={scrolled} />
      
      <main>
        {/* Offers are now the primary section as requested */}
        <div id="offers">
          <Offers />
        </div>

        {/* Hero Slider moved below for context/showcase */}
        <Hero />

        <Booster />

        <div id="testimonials">
          <Testimonials />
        </div>
      </main>

      <Footer />

      {/* Persistent CTA - Mobile Only */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <button className="w-full bg-[#1a2e1a] text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-2 transition-transform active:scale-95">
          Start My Design
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
