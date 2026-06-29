/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1a56db',
          700: '#1d4ed8',
        },
        accent: {
          400: '#a855f7',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(75px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(75px) rotate(-360deg)' },
        },
        shapeDrift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        particleRise: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: 0 },
        },
        pulseBadge: {
          '0%, 100%': { boxShadow: '0 6px 24px rgba(0,0,0,0.25), 0 0 0 0 rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 6px 24px rgba(0,0,0,0.25), 0 0 0 12px rgba(37,211,102,0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
        loaderFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        loaderPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 3s ease-in-out infinite',
        morph: 'morph 8s ease-in-out infinite',
        orbit1: 'orbit 6s linear infinite',
        orbit2: 'orbit 8s linear infinite -2s',
        orbit3: 'orbit 10s linear infinite -4s',
        orbit4: 'orbit 7s linear infinite -1s',
        shapeDrift: 'shapeDrift 20s linear infinite',
        particleRise: 'particleRise 12s linear infinite',
        pulseBadge: 'pulseBadge 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        loaderFill: 'loaderFill 1.8s ease forwards',
        loaderPulse: 'loaderPulse 1.5s ease-in-out infinite',
        scrollBounce: 'scrollBounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
