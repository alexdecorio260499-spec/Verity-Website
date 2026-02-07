
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import CaseStudies from './components/CaseStudies';
import TrustPhilosophy from './components/TrustPhilosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'cases', 'trust', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Gradients from Mixpanel style */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
        {/* The bottom gradient blobs as seen in the screenshot */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[70%] bg-indigo-100/40 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[5%] left-[20%] w-[50%] h-[60%] bg-purple-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[15%] right-[10%] w-[60%] h-[70%] bg-orange-50/60 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-50/30 blur-[100px] rounded-full"></div>
        
        {/* Soft noise texture */}
        <div className="absolute inset-0 bg-grainy opacity-[0.02]"></div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="story">
          <StorySection />
        </section>

        <section id="cases">
          <CaseStudies />
        </section>

        <section id="trust">
          <TrustPhilosophy />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
