import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BeforeAfterHero from './components/BeforeAfterHero';
import Offers from './components/Offers';
import Booster from './components/Booster';
import Footer from './components/Footer';
import luxuryGardenBg from './assets/luxury-garden-after.jpg';

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
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white relative">
      {/* Global Fixed Background */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${luxuryGardenBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Header />

      <main>
        <BeforeAfterHero />

        {/* Offers overlap the bottom of the Hero or sit right below */}
        <div id="offers" className="relative z-20 -mt-16 md:-mt-20 px-4">
          <Offers />
        </div>

        <Booster />
      </main>

      <Footer />

      {/* Persistent CTA - Mobile Only */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-2 transition-transform active:scale-95">
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
