
import React from 'react';

const TrustPhilosophy: React.FC = () => {
    return (
        <div className="min-h-screen py-32 px-6 md:px-12 relative flex items-center justify-center overflow-hidden bg-white">
            {/* Background large text like Reference 1 - muted for light theme */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-[18vw] font-heading font-black uppercase whitespace-nowrap text-slate-100">ACCOMPANIMENT</h2>
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center">
                <span className="text-[10px] text-primary uppercase tracking-[0.5em] font-black mb-8 block font-heading">THE HUMAN FACTOR</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-12 uppercase leading-[1] tracking-tighter text-text">
                    WE ARE <span className="text-text/30">PARTNERS,</span><br />
                    NOT JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-orange-400 italic">PROVIDERS.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
                    <div className="space-y-4 group">
                        <span className="text-primary font-heading font-black text-2xl group-hover:scale-110 transition-transform origin-left block">01.</span>
                        <h4 className="text-lg font-bold text-text uppercase font-heading">Consultative Audit</h4>
                        <p className="text-sm text-text/50 leading-relaxed font-medium font-body">
                            We start by mapping your unique human friction points, not by selling software licenses.
                        </p>
                    </div>
                    <div className="space-y-4 group">
                        <span className="text-primary font-heading font-black text-2xl group-hover:scale-110 transition-transform origin-left block">02.</span>
                        <h4 className="text-lg font-bold text-text uppercase font-heading">Tailored Systems</h4>
                        <p className="text-sm text-text/50 leading-relaxed font-medium font-body">
                            Every agency has a soul. Our systems respect yours, adapting to the way you naturally build relationships.
                        </p>
                    </div>
                    <div className="space-y-4 group">
                        <span className="text-primary font-heading font-black text-2xl group-hover:scale-110 transition-transform origin-left block">03.</span>
                        <h4 className="text-lg font-bold text-text uppercase font-heading">Legacy Support</h4>
                        <p className="text-sm text-text/50 leading-relaxed font-medium font-body">
                            We're here for the long haul. As the market shifts, your automation evolves under our guidance.
                        </p>
                    </div>
                </div>

                <div className="mt-24 bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[4rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-10 -mt-10"></div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black mb-8 text-text italic leading-snug">"Automating the mundane, liberating the exceptional."</h3>
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                            <img src="https://picsum.photos/seed/founderslight/200/200" className="w-24 h-24 rounded-full border-8 border-white shadow-xl object-cover" alt="Founder" />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center text-white text-[10px] font-bold">N.</div>
                        </div>
                        <div>
                            <p className="text-sm font-black text-text tracking-widest uppercase font-heading">The Nexus Collective</p>
                            <p className="text-[10px] text-text/30 font-bold uppercase mt-1">Strategic Accompaniment Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustPhilosophy;
