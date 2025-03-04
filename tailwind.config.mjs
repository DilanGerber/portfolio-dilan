/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-glow': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-105%)' }
        },
        'loop-scroll-reverse': {
          from: { transform: 'translateX(-105%)' },
          to: { transform: 'translateX(0)' }
        }
      },
      animation: {
        'border-spin': 'spin 5s linear infinite',
        'loop-scroll': 'loop-scroll 20s linear infinite',
        'loop-scroll-reverse': 'loop-scroll-reverse 20s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'zinc-925': '#181d21',
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
