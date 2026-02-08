
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-white px-6 pb-24">
      <div className="max-w-[1400px] mx-auto h-full relative rounded-[64px] overflow-hidden shadow-2xl border-4 border-white">
        
        {/* Background Images Layer */}
        <div 
          className="absolute inset-0 w-full h-full cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* AFTER */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa8c19681ef?auto=format&fit=crop&q=80&w=2000')` }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* BEFORE */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-none overflow-hidden border-r border-white/30"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000')`,
              width: `${sliderPos}%`
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Slider UI */}
          <div 
            className="absolute top-0 bottom-0 w-[4px] bg-white z-20 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
              <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7h8M8 12h8M8 17h8"/></svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-10 left-10 z-30 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase">
          Current State
        </div>
        <div className="absolute bottom-10 right-10 z-30 px-6 py-2 rounded-full bg-green-600/60 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase">
          Staged Result
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tighter drop-shadow-2xl serif italic">Experience the transformation</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
