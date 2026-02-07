
import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "The Leman Group",
      category: "Boutique Luxury",
      results: "+24% Sales velocity",
      impact: "Reduced paperwork by 18h/week",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Skyline Partners",
      category: "Commercial Real Estate",
      results: "Response Time: < 2 min",
      impact: "Zero-loss lead capture systems",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Horizon Living",
      category: "Residential Hub",
      results: "#1 Local Google Ranking",
      impact: "3x Organic Buyer Inquiries",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
                <span className="text-[10px] text-indigo-600 uppercase tracking-[0.4em] font-black mb-6 block">(CASE STUDIES)</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900">
                    REAL WORLD <br /><span className="text-gradient">OUTCOMES.</span>
                </h2>
            </div>
            <p className="text-slate-500 max-w-xs text-lg leading-relaxed mb-4 font-medium">
                Strategic shifts that translated into millions in reclaimed value for our partners.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cases.map((c, idx) => (
                <div key={idx} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50">
                    <img src={c.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={c.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <span className="text-[10px] text-indigo-400 uppercase font-bold tracking-widest mb-2">{c.category}</span>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase leading-tight tracking-tight">{c.title}</h3>
                        
                        <div className="space-y-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                                <div className="flex items-center gap-2 text-indigo-300 text-sm font-bold mb-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span>{c.results}</span>
                                </div>
                                <p className="text-xs text-white/70 font-medium">{c.impact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
