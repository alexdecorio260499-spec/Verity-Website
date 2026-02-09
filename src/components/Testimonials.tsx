import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">
          Stories from our <span className="italic text-secondary">Sanctuaries</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "Habitat Landscapes completely transformed our overgrown backyard into a stunning modern retreat. The 3D visualization helped us see exactly what we were getting."
              </p>
              <div>
                <strong className="block text-primary font-serif">Sarah Jenkins</strong>
                <span className="text-xs text-gray-400 uppercase tracking-wide">Surrey, UK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
