
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 ${
        scrolled ? 'translate-y-[-10px]' : ''
      }`}
    >
      <nav className={`max-w-7xl mx-auto flex items-center justify-between py-4 px-6 rounded-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-gray-100' : 'bg-white/40 backdrop-blur-sm border border-gray-200'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a2e1a]">
            DIY DEALER
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-green-600 transition-colors">Home</a>
          <a href="#offers" className="hover:text-green-600 transition-colors">Services</a>
          <a href="#" className="hover:text-green-600 transition-colors">Showcase</a>
          <a href="#testimonials" className="hover:text-green-600 transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full font-semibold transition-all bg-[#1a2e1a] text-white hover:bg-green-800">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
