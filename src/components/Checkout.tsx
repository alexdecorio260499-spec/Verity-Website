import React from 'react';
import paypalQr from '../assets/paypal-qr-code.png';

interface CheckoutProps {
    plan: {
        title: string;
        price: string;
        description: string;
        features: string[];
        gradient: string;
        border: string;
    };
    onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ plan, onClose }) => {
    const containerId = "paypal-container-ZQQKJSDB3EXGU";

    React.useEffect(() => {
        // Ensure PayPal script is loaded and available
        const renderPayPalButton = () => {
            if (window.paypal) {
                try {
                    // Start fresh if needed, though usually render handles it.
                    // The container needs to be empty or handle re-renders gracefully.
                    const container = document.getElementById(containerId);
                    if (container) container.innerHTML = "";

                    window.paypal.HostedButtons({
                        hostedButtonId: "ZQQKJSDB3EXGU"
                    })
                        .render(`#${containerId}`);
                } catch (error) {
                    console.error("PayPal button render error:", error);
                }
            }
        };

        // If the script is already loaded (from index.html async), run immediately
        if (window.paypal) {
            renderPayPalButton();
        } else {
            // If script loads later, we can retry or listen for load - but since it's in head async,
            // it usually loads quickly. A simple interval check is robust for this case without
            // complex script loading logic in component.
            const checkInterval = setInterval(() => {
                if (window.paypal) {
                    renderPayPalButton();
                    clearInterval(checkInterval);
                }
            }, 500);
            return () => clearInterval(checkInterval);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-30"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Column: Order Summary (Styled like Offer Card) */}
                <div className={`
                    w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center
                    ${plan.gradient}
                `}>
                    {/* Dark overlay to ensure contrast if needed, or rely on the gradient passing */}
                    {/* Replicating the card feel */}

                    <h2 className="text-3xl font-serif mb-2 font-bold opacity-90">Order Summary</h2>
                    <p className="opacity-80 mb-8 border-b border-white/20 pb-4">You are one step away from your dream garden.</p>

                    <div className={`rounded-2xl p-6 border-2 ${plan.border} bg-white/10 backdrop-blur-md shadow-inner`}>
                        <h3 className="text-2xl font-bold mb-1 opacity-100">{plan.title}</h3>
                        <p className="text-sm opacity-80 mb-4">{plan.description}</p>

                        <div className="text-4xl font-extrabold mb-6 tracking-tight">{plan.price}</div>

                        <ul className="space-y-3">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium opacity-90">
                                    <div className="rounded-full p-0.5 bg-white/20 shrink-0 mt-0.5">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Payment */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#0F0F0F] flex flex-col items-center justify-center text-center relative z-20">
                    <h2 className="text-2xl font-serif text-white mb-8">Secure Payment</h2>

                    {/* PayPal Container */}
                    <div className="w-full max-w-[300px] bg-white p-4 rounded-xl shadow-lg mb-6 flex items-center justify-center min-h-[150px]">
                        <div id={containerId} className="w-full"></div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-white/90 font-medium text-lg">
                            Pay safely with PayPal
                        </p>
                        <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
                            Click the button above to proceed with your payment securely.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[#4CAF50] bg-[#4CAF50]/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        SSL Encrypted Connection
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
