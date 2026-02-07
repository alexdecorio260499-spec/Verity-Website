
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="relative">
             <div className="absolute -inset-20 bg-purple-100/30 blur-[120px] rounded-full"></div>
             <div className="space-y-12 relative z-10">
                <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-4">The Real Estate Paradox</p>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 leading-tight">High stakes shouldn't mean high stress.</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      You entered this industry for the thrill of the deal and the joy of matching people to homes. Somewhere along the way, administrative debt started stealing your time.
                    </p>
                </div>

                <div className="pl-12 border-l-4 border-indigo-500/20">
                    <p className="text-slate-500 leading-relaxed italic text-xl">
                      "Nexus didn't just give us a dashboard. They became our strategic backbone, allowing us to be agents again, not administrative assistants."
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                            <img src="https://picsum.photos/seed/director2/100/100" alt="Testimonial" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Claire De-Lune</p>
                            <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">Founder, L'Artiste Realty</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
            <span className="text-[10px] text-indigo-600 uppercase tracking-[0.4em] font-black mb-6 block">(OUR PHILOSOPHY)</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tighter text-slate-900">
                WE VALUE YOUR <br /> 
                <span className="text-gradient">TIME ABOVE ALL.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg font-medium">
                We believe in automation as a servant to human connection, not a replacement for it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-100/50 shadow-sm">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Personal Liaison</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Direct access to a human consultant who understands the nuances of local markets.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 border border-pink-100/50 shadow-sm">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Stealth Workflows</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Automations that work in the background, making your agency feel larger and faster.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
