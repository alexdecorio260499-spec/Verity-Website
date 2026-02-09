/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#142814', // Deep Forest Green
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#A38E6E', // Earthy Gold
                    foreground: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#F0FDF4', // Soft Mint
                    foreground: '#142814',
                },
                background: '#F8FAFC',
                text: '#1E293B',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
        },
    },
    plugins: [],
}
