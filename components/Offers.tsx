
import React from 'react';
import { OFFERS, ADD_ONS } from '../constants';
import { Offer } from '../types';

const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  return (
    <div className={`relative flex flex-col p-6 md:p-10 rounded-[48px] text-white overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] h-[600px] md:h-[700px] group bg-gradient-to-br ${offer.gradient}`}>
      
      {/* Mesh Gradient Effect / Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 blur-[100px] rounded-full" />
      </div>

      {offer.isPopular && (
        <div className="absolute top-8 right-8 bg-black/20 backdrop-blur-xl px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 border border-white/10 shadow-2xl z-20">
          <span className="text-yellow-400">★</span> Most Popular
        </div>
      )}

      {/* Floating Elements mimicking the reference image style */}
      <div className="absolute top-12 left-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
         </div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Internal Card Content mimicking the reference mockup */}
        <div className="bg-black/90 backdrop-blur-2xl rounded-[32px] p-6 mb-8 border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
           <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold tracking-[0.1em] text-white/50 uppercase">{offer.title}</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-bold text-white/40">Active</span>
           </div>
           <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold tracking-tighter">{offer.price}</span>
              <span className="text-sm text-white/40">/project</span>
           </div>
           
           <div className="space-y-3 mb-8">
              {offer.includes.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[11px] font-medium text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </div>
              ))}
           </div>

           <div className="flex items-center gap-4">
              <button className="flex-1 bg-white text-black py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2">
                 Choose today
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                 <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
           </div>
        </div>

        <div className="mt-auto">
          <h4 className="text-3xl font-extrabold mb-3 tracking-tight">{offer.id.charAt(0).toUpperCase() + offer.id.slice(1)}</h4>
          <p className="text-white/80 text-base leading-relaxed font-medium mb-6">
            {offer.subtitle}
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
               <img src={`https://i.pravatar.cc/150?u=${offer.id}`} alt="Designer" />
            </div>
            <div className="text-xs">
              <div className="font-bold">Managed by Expert</div>
              <div className="opacity-50 tracking-widest uppercase text-[10px]">Staging Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Offers: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 bg-[#fcfbf7]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-8xl font-bold text-[#1a2e1a] mb-8 tracking-tighter leading-[0.9]">
            The way design <span className="serif italic font-normal text-green-700">should've</span><br />been done in the first place
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
             Visualize your outdoor space with realistic staging and professional landscaping before investing thousands in the wrong setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {OFFERS.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Brand Logos Strip mimicking the reference footer */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30 grayscale mb-24">
          <span className="text-2xl font-bold tracking-tighter">nectar</span>
          <div className="flex items-center gap-2 font-bold italic text-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.5 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12.5a3.5 3.5 0 000-7 3.5 3.5 0 000-7z"/></svg>
            Buy me a coffee
          </div>
          <span className="text-2xl font-black">beehiiv</span>
          <span className="text-2xl font-semibold tracking-tight uppercase">Laravel</span>
          <span className="text-2xl font-bold italic">Xfinity</span>
        </div>

        {/* Add-ons section */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-[48px] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h4 className="text-3xl font-bold text-[#1a2e1a] mb-2 tracking-tight">Customize your project</h4>
              <p className="text-gray-500 font-medium">Extra flair or faster results? We've got you covered.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {ADD_ONS.map(addon => (
                <div key={addon.name} className="bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-100 transition-all cursor-pointer px-8 py-5 rounded-3xl flex items-center gap-6 group">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1a2e1a] text-lg">{addon.name}</span>
                    <span className="text-sm text-green-700 font-bold uppercase tracking-widest">{addon.price}</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
