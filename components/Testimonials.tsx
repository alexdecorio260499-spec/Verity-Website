
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm block mb-4">Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] leading-tight">
              Real results for<br />real spaces.
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 font-medium">4.9/5 stars based on 120+ reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(item => (
            <div key={item.id} className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col group">
              <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-green-800 border border-green-100 self-start mb-8 shadow-sm">
                {item.tag}
              </span>
              <h4 className="text-xl font-bold text-[#1a2e1a] mb-6 leading-relaxed serif group-hover:text-green-800 transition-colors">
                {item.quote}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-10 italic">
                {item.content}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a2e1a] flex items-center justify-center text-white font-bold text-lg">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-bold text-[#1a2e1a]">{item.author}</div>
                  <div className="text-xs text-gray-400 font-bold tracking-widest uppercase">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
