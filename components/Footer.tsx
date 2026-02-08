
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcfbf7] pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1a2e1a] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-green-400 rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1a2e1a]">
                DIY DEALER
              </span>
            </div>
            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
              Professional garden staging and high-end landscaping visualization. Helping you build the outdoor space of your dreams with zero hesitation.
            </p>
            <div className="flex gap-4">
              {['instagram', 'linkedin', 'facebook', 'pinterest'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-600 hover:border-green-600 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[#1a2e1a] mb-6 uppercase tracking-widest text-sm">Services</h5>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Concept Visualization</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Style Comparison</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Full Build Plans</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Custom Add-ons</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#1a2e1a] mb-6 uppercase tracking-widest text-sm">Company</h5>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Pricing FAQ</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div className="bg-[#1a2e1a] p-8 rounded-[32px] text-white">
            <h5 className="font-bold mb-4">Weekly Inspiration</h5>
            <p className="text-white/60 text-sm mb-6">Join our newsletter for garden design tips and exclusive deals.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-white/30"
              />
              <button className="w-full bg-white text-[#1a2e1a] font-bold py-3 rounded-full text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
          <p>© 2025 DIY DEALER. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
