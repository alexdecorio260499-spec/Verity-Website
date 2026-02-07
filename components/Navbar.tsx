
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
          <span className="text-2xl font-display font-black tracking-tighter cursor-pointer text-slate-900" onClick={() => scrollTo('hero')}>
            NEXUS<span className="text-indigo-600">.</span>
          </span>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-slate-100/50 backdrop-blur-md border border-slate-200/50 rounded-full text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            <span>40°N 100°W</span>
            <span className="opacity-30">/</span>
            <span>Premium Partners</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full">
          {[
            { id: 'hero', label: 'Overview' },
            { id: 'story', label: 'Approach' },
            { id: 'cases', label: 'Results' },
            { id: 'trust', label: 'Partnership' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-semibold transition-all ${
                activeSection === item.id ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="group flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-slate-200"
        >
          <span>Contact Sales</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
