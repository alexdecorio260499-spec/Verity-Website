
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 items-start">

          {/* Brand & Socials - Compact */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-[#1a2e1a] block mb-3">
              DIY DEALER
            </span>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Professional garden staging and design.
            </p>
            <div className="flex gap-3">
              {['instagram', 'linkedin', 'facebook', 'pinterest'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1a2e1a] hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Condensed */}
          <div>
            <h5 className="font-bold text-[#1a2e1a] mb-3 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-2 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">Concept Visualization</a></li>
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">Style Comparison</a></li>
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">Full Build Plans</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#1a2e1a] mb-3 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-2 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter - Minimalist */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h5 className="font-bold text-[#1a2e1a] mb-2 text-sm">Design Tips</h5>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1a2e1a] text-gray-800 placeholder:text-gray-400"
              />
              <button className="bg-[#1a2e1a] text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2025 DIY DEALER. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1a2e1a] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1a2e1a] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
