
import React from 'react';

const Booster: React.FC = () => {
  const benefits = [
    "Avoid buying the wrong furniture",
    "Visualize before spending thousands",
    "Faster and more flexible than hiring a designer",
    "Delivered in 24–48h"
  ];

  return (
    <section className="bg-[#1a2e1a] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Why people love this
          </h2>
          <ul className="space-y-6">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 text-white/90 text-lg md:text-xl font-medium">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-auto flex flex-col items-center gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-6 bg-white text-[#1a2e1a] rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
              Start My Design
            </button>
          </div>
          <p className="text-white/50 text-sm font-medium">Join 500+ happy garden owners this season.</p>
        </div>
      </div>
    </section>
  );
};

export default Booster;
