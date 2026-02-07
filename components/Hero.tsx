
import React from 'react';

const Hero: React.FC = () => {
  const partners = [
    { name: "Xero", icon: "https://www.vectorlogo.zone/logos/xero/xero-icon.svg" },
    { name: "Yelp", icon: "https://www.vectorlogo.zone/logos/yelp/yelp-icon.svg" },
    { name: "Workday", icon: "https://www.vectorlogo.zone/logos/workday/workday-icon.svg" },
    { name: "Pinterest", icon: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg" },
    { name: "LG", icon: "https://www.vectorlogo.zone/logos/lge/lge-icon.svg" }
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-slate-900">
          Growth that <br />
          <span className="text-gradient">drives decisions.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          Nexus helps real estate agencies turn operational friction into clear growth paths, without admin bottlenecks. With human-centric accompaniment for strategy, setup, and scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group">
            Get Started Free
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center gap-2 group">
            Book a Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Social Proof - Logo wall like Mixpanel */}
      <div className="w-full max-w-6xl mt-24 py-12 border-t border-slate-100">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {partners.map((p, i) => (
             <div key={i} className="flex items-center gap-2">
                <img src={p.icon} className="h-8 w-auto" alt={p.name} />
                <span className="font-bold text-xl tracking-tighter hidden md:block">{p.name}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Interactive Visual Element like the dashboard in Mixpanel screenshot */}
      <div className="w-full max-w-7xl mt-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-[40px] opacity-50"></div>
          <div className="relative glass-panel rounded-[40px] overflow-hidden border border-white/50 shadow-2xl">
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left side: Navigation / Categories */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="p-3 bg-white/50 rounded-xl flex items-center gap-3 border border-slate-100">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>
                        </div>
                        <span className="font-bold text-sm">Main Board</span>
                    </div>
                    <div className="space-y-2">
                        {['Listings insights', 'Lead conversion', 'Admin liberation', 'Agent focus time'].map((item, i) => (
                            <div key={i} className="px-4 py-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer font-medium">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side: Charts / Data mockup like screenshot */}
                <div className="lg:col-span-9 space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="text-indigo-600">🎯</span> Core Performance KPIs
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Focus Time Reclaimed</p>
                            <div className="h-40 flex items-end gap-2">
                                {[30, 45, 60, 80, 75, 90, 100].map((h, i) => (
                                    <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-md hover:bg-indigo-500 transition-colors" style={{height: `${h}%`}}></div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Lead Response Velocity</p>
                            <div className="relative h-40">
                                <svg className="w-full h-full" viewBox="0 0 100 40">
                                    <path d="M0,35 Q25,30 50,15 T100,5" fill="none" stroke="#6366f1" strokeWidth="2" />
                                    <path d="M0,38 Q25,35 50,25 T100,20" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.4" />
                                </svg>
                                <div className="absolute top-0 right-0 glass-panel px-3 py-1 rounded-lg text-[10px] font-bold text-indigo-600">-85% Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Floating 'Share' card like in the reference image */}
          <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 glass-panel p-6 rounded-2xl shadow-2xl border border-white w-72 z-20">
              <p className="font-bold text-sm mb-4">Share this Board</p>
              <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold">Marcus Bennett</p>
                        <p className="text-[9px] text-slate-400">Lead Consultant</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                    <span>Public Board</span>
                    <div className="w-8 h-4 bg-indigo-600 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
