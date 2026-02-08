
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
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-5xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] tracking-tight text-text drop-shadow-sm">
          Growth that <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-orange-400">drives decisions.</span>
        </h1>

        <p className="text-xl md:text-2xl text-text/60 max-w-3xl mx-auto leading-relaxed font-body font-light">
          Nexus helps real estate agencies turn operational friction into clear growth paths, without admin bottlenecks. With human-centric accompaniment for strategy, setup, and scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="animated-btn draw meet px-8 py-4 text-text rounded-none font-body font-bold text-lg transition-all flex items-center gap-2 group hover:-translate-y-1">
            Get Started Free
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <button className="animated-btn spin px-8 py-4 text-text rounded-none font-body font-bold text-lg transition-all flex items-center gap-2 group hover:-translate-y-1">
            Book a Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Social Proof - Logo wall like Mixpanel */}
      <div className="w-full max-w-6xl mt-24 py-12 border-t border-indigo-500/10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-text/30 mb-8">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
              <img src={p.icon} className="h-8 w-auto group-hover:scale-110 transition-transform duration-300" alt={p.name} />
              <span className="font-heading font-bold text-xl tracking-tighter hidden md:block text-text/60 group-hover:text-text transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Visual Element like the dashboard in Mixpanel screenshot */}
      <div className="w-full max-w-7xl mt-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-orange-400/10 blur-3xl rounded-[40px] opacity-40 animate-pulse"></div>
        <div className="relative glass-panel rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-500/5">
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side: Navigation / Categories */}
            <div className="lg:col-span-3 space-y-6 border-r border-slate-100 pr-6">
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-inner">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-text block">Main Board</span>
                  <span className="text-[10px] text-text/40 font-medium">Real-time Overview</span>
                </div>
              </div>
              <div className="space-y-1">
                {['Listings insights', 'Lead conversion', 'Admin liberation', 'Agent focus time'].map((item, i) => (
                  <div key={i} className={`px-4 py-3 rounded-xl text-sm transition-all cursor-pointer font-medium flex items-center justify-between group ${i === 0 ? 'bg-indigo-50 text-primary shadow-sm' : 'text-text/40 hover:bg-slate-50 hover:text-primary'}`}>
                    {item}
                    {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Charts / Data mockup like screenshot */}
            <div className="lg:col-span-9 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-heading font-bold flex items-center gap-3 text-text">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  Core Performance KPIs
                </h3>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-text/40">Last 30 Days</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-30 text-secondary group-hover:scale-110 transition-transform">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-xs font-bold text-text/30 uppercase tracking-widest mb-4 font-heading">Focus Time Reclaimed</p>
                  <div className="h-40 flex items-end gap-3 px-2">
                    {[30, 45, 60, 80, 75, 90, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-secondary/60 rounded-t-lg group-hover:from-primary/60 group-hover:to-secondary/60 transition-all relative group/bar" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-cta text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">{h}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors duration-500 relative">
                  <p className="text-xs font-bold text-text/30 uppercase tracking-widest mb-4 font-heading">Lead Response Velocity</p>
                  <div className="relative h-40 flex items-end">
                    <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,35 C20,32 40,10 50,15 S80,30 100,5" fill="url(#gradient-hero)" stroke="none" />
                      <path d="M0,35 C20,32 40,10 50,15 S80,30 100,5" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" className="animate-draw" />
                    </svg>
                    <div className="absolute top-0 right-0 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl">
                      <div className="text-2xl font-bold text-primary font-heading">-85%</div>
                      <div className="text-[9px] font-bold text-text/30 uppercase tracking-wider">Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 'Share' card like in the reference image */}
        <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 glass-panel p-6 rounded-3xl shadow-2xl border border-white w-72 z-20 animate-float">
          <div className="flex justify-between items-center mb-6">
            <p className="font-heading font-bold text-sm text-text">Team Activity</p>
            <div className="p-1.5 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <svg className="w-4 h-4 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-primary border-2 border-white shadow-sm"></div>
              <div className="flex-1">
                <p className="text-xs font-bold text-text">Marcus Bennett</p>
                <p className="text-[10px] text-text/40 font-medium">Closed deal #402</p>
              </div>
              <div className="text-[9px] font-bold text-primary bg-indigo-50 px-2 py-1 rounded-md">Just now</div>
            </div>
            <div className="flex items-center gap-3 opacity-40">
              <div className="w-8 h-8 rounded-full bg-slate-200"></div>
              <div className="flex-1">
                <div className="h-2 w-20 bg-slate-100 rounded-full mb-1"></div>
                <div className="h-1.5 w-12 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
