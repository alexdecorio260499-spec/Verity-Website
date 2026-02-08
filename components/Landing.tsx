
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import StorySection from './StorySection';
import CaseStudies from './CaseStudies';
import TrustPhilosophy from './TrustPhilosophy';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Landing: React.FC = () => {
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
        <div className="relative min-h-screen selection:bg-secondary/30 selection:text-primary">
            {/* Background Gradients from Mixpanel style */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[0%] left-[20%] w-[40%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] right-[10%] w-[50%] h-[60%] bg-orange-400/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-400/5 blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 bg-grainy"></div>
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

export default Landing;
