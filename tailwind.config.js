/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        paperPure: '#FCFBF8',
        paperAlt: '#EFE6D8',
        cream: '#FAF6F0',
        ink: '#262220',
        inkSoft: '#524A44',
        inkMuted: '#786F67',
        wine: '#7A2E3A',
        wineDark: '#5C222B',
        wineLight: '#F5ECEE',
        wineBorder: '#9E3B4B',
        gold: '#C9A66B',
        goldLight: '#F6EEDF',
        goldDark: '#A68244',
        line: '#DDD1BE',
        lineSoft: '#E8DEC9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '42rem',
        editorial: '1240px',
      },
      boxShadow: {
        editorial: '0 10px 30px -10px rgba(38, 34, 32, 0.07)',
        'editorial-lg': '0 20px 40px -15px rgba(38, 34, 32, 0.12)',
        'wine-glow': '0 8px 24px -6px rgba(122, 46, 58, 0.35)',
        'wine-glow-lg': '0 12px 32px -4px rgba(122, 46, 58, 0.45)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-soft': 'cubic-bezier(0.25, 0.9, 0.25, 1)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(4px, -10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-6px, 8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.12', transform: 'scale(1)' },
          '50%': { opacity: '0.22', transform: 'scale(1.05)' },
        },
        'shimmer-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'shimmer-sweep': 'shimmer-sweep 2.5s infinite',
        'fade-in-up': 'fade-in-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
