/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keep your existing values untouched
      transform: ['group-hover'],
      rotate: {
        'x-180': '180deg',
      },
      keyframes: {
        // 👇 leave your existing marquee animations
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        // ✅ new animation for cursor click
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        // 👇 keep existing ones
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        // ✅ new cursor animation
        'cursor-click': 'pop 0.2s ease-in-out',
      },
      colors: {
        learniverse: '#8BCA1E',
      },
    },
  },

  plugins: [],
};
