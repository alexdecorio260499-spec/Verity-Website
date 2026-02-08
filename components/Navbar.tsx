
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-heading font-bold tracking-tighter cursor-pointer text-text" onClick={() => scrollTo('hero')}>
            NEXUS<span className="text-primary">.</span>
          </span>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-primary/5 backdrop-blur-md border border-primary/10 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
            <span>40°N 100°W</span>
            <span className="opacity-30">/</span>
            <span>Premium Partners</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/5 rounded-full">
          {[
            { id: 'hero', label: 'Overview' },
            { id: 'story', label: 'Approach' },
            { id: 'cases', label: 'Results' },
            { id: 'trust', label: 'Partnership' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-body font-semibold transition-all duration-300 ${activeSection === item.id ? 'text-primary scale-105' : 'text-text/60 hover:text-primary hover:scale-105'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="group flex items-center gap-3 px-6 py-3 bg-cta hover:bg-slate-900 text-white rounded-full font-body font-bold transition-all duration-300 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5"
        >
          <span>Contact Sales</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
