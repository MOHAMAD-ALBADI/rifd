/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3B', 950: '#030B1A', 900: '#061329', 800: '#0B1F3B', 700: '#132C52', 600: '#1C3A69' },
        teal: { DEFAULT: '#14D1C8', 300: '#6FE8E1', 500: '#14D1C8', 700: '#0E9E97' },
        rifd: { DEFAULT: '#3B82F6', 300: '#93BBFB', 400: '#5E9AF8', 500: '#3B82F6', 600: '#2563EB' },
        paper: { DEFAULT: '#F8FAFF', 200: '#EEF2FA', 300: '#DFE6F3' },
        ink: { DEFAULT: '#0B1F3B', soft: '#4A5B78' },
      },
      fontFamily: {
        ar: ['Tajawal', 'Manrope', 'system-ui', 'sans-serif'],
        en: ['Manrope', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { label: '0.28em' },
    },
  },
  plugins: [],
};
