/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#010c15',
        darkBlue: '#011627',
        gray: '#607b96',
        white: '#ffffff',
        violet: '#4d5bce',
        border: '#1e2d3d',
        darkWhite: '#e5e9f0',
        orange: '#e99287',
        green: '#43d9ad',
        cardBg: '#011221',
        btnBg: '#1c2b3a'
      },
      borderRadius: {
        default: '8px'
      },
      fontSize: {
        headLine: '62px',
        subHeadLine: '32px',
        normal: '18px',
        label: '16px',
        snippet: '14px'
      },
      width: {
        container: 'calc(100vw - 100px)',
        content: '100%'
      },
      height: {
        container: 'calc(100vh - 100px)',
        content: 'calc(100% - 56px - 50px)'
      }
    }
  },
  plugins: []
};
