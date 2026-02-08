
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <div className="min-h-screen py-32 px-6 md:px-12 flex items-center justify-center">
            <div className="max-w-7xl w-full bg-gradient-to-br from-cta to-primary rounded-[60px] p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 shadow-2xl shadow-indigo-500/20">
                <div className="absolute top-0 left-0 w-full h-full bg-grainy opacity-[0.05] pointer-events-none"></div>
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full"></div>

                <div className="relative z-10 lg:w-1/2">
                    <span className="text-[10px] text-indigo-300 uppercase tracking-[0.4em] font-black mb-8 block font-heading">READY TO START?</span>
                    <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white mb-8 leading-[0.95]">
                        SCALE <br />
                        <span className="text-indigo-300">SMARTER.</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-12 leading-relaxed font-body font-medium">
                        Book your discovery audit. Let's find the 20% of admin tasks stealing 80% of your growth potential.
                    </p>

                    <div className="space-y-10">
                        <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold font-heading">Inquiries</p>
                                <p className="text-lg text-white font-bold font-heading">hello@nexus-partners.ai</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold font-heading">Speak with Strategy</p>
                                <p className="text-lg text-white font-bold font-heading">Book a call ↗</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 lg:w-1/2 bg-white/5 backdrop-blur-xl p-8 md:p-14 rounded-[40px] border border-white/10 shadow-2xl">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] text-white/60 uppercase tracking-widest font-bold font-heading">Contact Name</label>
                                <input type="text" placeholder="Johnathan Doe" className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 font-medium font-body" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] text-white/60 uppercase tracking-widest font-bold font-heading">Market Focus</label>
                                <input type="text" placeholder="Luxury Residential" className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 font-medium font-body" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] text-white/60 uppercase tracking-widest font-bold font-heading">Agency Email</label>
                            <input type="email" placeholder="john@agency.com" className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 font-medium font-body" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] text-white/60 uppercase tracking-widest font-bold font-heading">Current Challenge</label>
                            <textarea rows={4} placeholder="Where are you losing the most time?" className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/20 font-medium font-body"></textarea>
                        </div>

                        <button className="w-full py-6 bg-white text-cta hover:bg-slate-100 font-heading font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform active:scale-95 shadow-xl shadow-indigo-500/10 flex items-center justify-center gap-2 group">
                            Submit Inquire
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
