import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bright-black': '#0a0a0a',
        'off-white': '#f8f8f8',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.3))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255,255,255,0.3)',
        'glow-lg': '0 0 40px rgba(255,255,255,0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;