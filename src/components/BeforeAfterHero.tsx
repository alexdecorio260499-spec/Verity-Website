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
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#E8F5E9] leading-tight mb-6 drop-shadow-2xl animate-fade-in-up">
                        See it, love it, build it — <br />
                        <span className="italic text-secondary">without second-guessing.</span>
                    </h1>
                    <p className="text-white/95 text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
                        Stop guessing. Visualise your Outdoor space with realistic Staging and professional landscaping before investing thousands in the wrong setup.
                        <br /><span className="font-medium mt-2 block">Save time, save money, enjoy the process.</span>
                    </p>

                    <div className="hidden" />
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterHero;
