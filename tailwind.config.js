/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3B', 950: '#030B1A', 900: '#061329', 800: '#0B1F3B', 700: '#132C52', 600: '#1C3A69' },
        teal: { DEFAULT: '#14D1C8', 50: '#E8FBFA', 100: '#C9F5F2', 300: '#6FE8E1', 500: '#14D1C8', 600: '#0FB3AB', 700: '#0A7F7A' },
        rifd: { DEFAULT: '#3B82F6', 50: '#EEF4FF', 100: '#DCE8FE', 200: '#BFD5FD', 300: '#93BBFB', 400: '#5E9AF8', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
        paper: { DEFAULT: '#F8FAFF', 200: '#EEF2FA', 300: '#DFE6F3' },
        ink: { DEFAULT: '#0B1F3B', soft: '#4A5B78', 2: '#34445F', 3: '#5A6984' },
        night: { DEFAULT: '#0B1F3B', deep: '#071629', surface: '#122B48', raised: '#183A5E' },
        snow: '#F8FAFF', mist: '#CBD5E1', fog: '#9FB0C8',
        canvas: '#F5F7FC',
        surface: { DEFAULT: '#FFFFFF', 2: '#F0F4FA', 3: '#E6ECF6' },
        line: { DEFAULT: '#E1E7F1', strong: '#C9D3E3' },
        amber: { 50: '#FFF7E8', 200: '#FDE68A', 300: '#FCD34D', 600: '#B45309', 700: '#92400E' },
      },
      fontFamily: {
        ar: ['Tajawal', 'Manrope', 'system-ui', 'sans-serif'],
        en: ['Manrope', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,31,59,0.04), 0 8px 24px -12px rgba(11,31,59,0.12)',
        lift: '0 2px 4px rgba(11,31,59,0.04), 0 24px 48px -20px rgba(11,31,59,0.22)',
        app: '0 2px 6px rgba(11,31,59,0.05), 0 40px 80px -30px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
