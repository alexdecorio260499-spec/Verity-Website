
import React from 'react';

const TrustPhilosophy: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 md:px-12 relative flex items-center justify-center overflow-hidden bg-white">
      {/* Background large text like Reference 1 - muted for light theme */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[18vw] font-black uppercase whitespace-nowrap text-slate-900">ACCOMPANIMENT</h2>
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        <span className="text-[10px] text-indigo-600 uppercase tracking-[0.5em] font-black mb-8 block">THE HUMAN FACTOR</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 uppercase leading-[1] tracking-tighter text-slate-900">
            WE ARE <span className="text-slate-400">PARTNERS,</span><br />
            NOT JUST <span className="text-indigo-600 italic">PROVIDERS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
            <div className="space-y-4">
                <span className="text-indigo-600 font-display font-black text-2xl">01.</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase">Consultative Audit</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    We start by mapping your unique human friction points, not by selling software licenses.
                </p>
            </div>
            <div className="space-y-4">
                <span className="text-indigo-600 font-display font-black text-2xl">02.</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase">Tailored Systems</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Every agency has a soul. Our systems respect yours, adapting to the way you naturally build relationships.
                </p>
            </div>
            <div className="space-y-4">
                <span className="text-indigo-600 font-display font-black text-2xl">03.</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase">Legacy Support</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    We're here for the long haul. As the market shifts, your automation evolves under our guidance.
                </p>
            </div>
        </div>

        <div className="mt-24 bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[4rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 blur-3xl rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 italic leading-snug">"Automating the mundane, liberating the exceptional."</h3>
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <img src="https://picsum.photos/seed/founderslight/200/200" className="w-24 h-24 rounded-full border-8 border-white shadow-xl object-cover" alt="Founder" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">N.</div>
                </div>
                <div>
                    <p className="text-sm font-black text-slate-900 tracking-widest uppercase">The Nexus Collective</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Strategic Accompaniment Experts</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPhilosophy;
