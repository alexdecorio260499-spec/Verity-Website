import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-0147eda7e769?q=80&w=2670&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 animate-fade-in-up">
          Luxury Garden <br />
          <span className="italic text-secondary">Renovations</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform your outdoor space with Habitat Landscapes' bespoke renovations.
          From design to delivery, we blend luxury and elegance to create your perfect sanctuary.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-secondary hover:bg-[#8E7B5D] text-white px-8 py-4 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-lg w-full md:w-auto">
            Start Your Journey
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all w-full md:w-auto">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
