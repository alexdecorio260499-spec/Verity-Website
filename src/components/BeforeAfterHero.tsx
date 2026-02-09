import React from 'react';

const BeforeAfterHero: React.FC = () => {
    return (
        <section
            className="relative h-[55vh] md:h-[60vh] overflow-hidden select-none"
        >
            {/* Background Image moved to global App.tsx for fixed effect */}

            {/* Text Overlay */}
            <div className="absolute inset-0 z-10 flex items-start justify-center pt-20 md:pt-28">
                <div className="text-center px-4 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#d4e157] drop-shadow-lg mb-6 leading-tight">
                        See it, love it, build it &mdash;
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md font-light">
                        Stop guessing. Visualise your Outdoor space with realistic Staging and professional landscaping before investing thousands in the wrong setup.
                    </p>

                    <p className="text-sm md:text-base text-white/80 font-medium tracking-wide uppercase">
                        Save time, save money, enjoy the process.
                    </p>
                    <div className="hidden" />
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterHero;
