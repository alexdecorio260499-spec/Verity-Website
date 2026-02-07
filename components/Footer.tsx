
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 bg-white border-t border-slate-100 relative z-10 overflow-hidden">
      {/* Soft gradient accent in footer corner like the screenshot */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-100/30 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
        <div className="max-w-md">
            <span className="text-3xl font-display font-black tracking-tighter text-slate-900 mb-6 block">
                NEXUS<span className="text-indigo-600">.</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                The strategic bridge between high-stakes real estate and automated efficiency. Built for the agents who value human contact as their ultimate competitive advantage.
            </p>
        </div>

        <div className="flex flex-wrap gap-16 text-sm">
            <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Growth</p>
                <div className="flex flex-col gap-3">
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Our Method</a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Accompaniment</a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Workflows</a>
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Company</p>
                <div className="flex flex-col gap-3">
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Partnership</a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Insights</a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-semibold">Legal</a>
                </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
        <p>© 2025 Nexus Real Estate Partners. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
            <span className="text-indigo-500">Human-Centric</span>
            <span>Strategic Growth</span>
            <span className="text-pink-400">Premium Scale</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
