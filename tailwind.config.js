/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'x-180': '180deg',
      },

      // ✅ Custom Keyframes
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // only move half because we duplicate
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },

        // ⚡ Running border animation
        borderRun: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },


      // ✅ Animations
      animation: {
        marquee: 'marquee 40s linear infinite', // ⏳ slower
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'cursor-click': 'pop 0.2s ease-in-out',

        // ⚡ Running orange border
        'border-run': 'borderRun 4s linear infinite',
           "0%": { backgroundPosition: "0% 50%" },
      "100%": { backgroundPosition: "200% 50%" },
      },

      // ✅ Custom Colors
      colors: {
        learniverse: '#8BCA1E',
      },
    },
  },
  plugins: [],
};
