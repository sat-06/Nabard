/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Signature palette — "night-sky over rural India at sunrise"
        ink: '#0B1220',            // deep near-black — used sparingly
        midnight: '#0F1E3D',       // primary dark (hero, footer)
        dusk: '#1B2A4E',           // card dark variant
        ivory: '#FFF9F0',          // warm cream — light bg
        parchment: '#F4EBDC',      // slightly deeper cream — sections
        saffron: '#F59E0B',        // signature accent (warm gold)
        marigold: '#EF6C1A',       // secondary warm accent
        mint: '#3DDC97',           // success / health
        terracotta: '#E4572E',     // alert / risk
        mist: '#E8DFCC',           // hairline / dividers on ivory
        ash: '#6B7280',            // secondary body text
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      keyframes: {
        'fade-up':   { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in':   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'pulse-dot': { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.4', transform: 'scale(1.4)' } },
        'draw':      { '0%': { strokeDashoffset: '1000' }, '100%': { strokeDashoffset: '0' } },
        'float':     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        'sheen':     { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(200%)' } },
      },
      animation: {
        'fade-up':   'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':   'fade-in 600ms ease-out both',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'draw':      'draw 3s ease-out forwards',
        'float':     'float 4s ease-in-out infinite',
        'sheen':     'sheen 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
