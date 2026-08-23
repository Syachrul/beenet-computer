/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5B042',
          dark: '#D4902E',
          light: '#FCD89E',
        },
        secondary: {
          DEFAULT: '#1E2A3A',
          dark: '#0F1724',
          light: '#2A3A4E',
        },
        gray: {
          50: '#F8F9FC',
          100: '#EFF0F4',
          200: '#DCE0E8',
          300: '#B8C0CC',
          400: '#8A97A8',
          500: '#6C7A8A',
          600: '#4A5A6A',
          700: '#2A3A4E',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(0,0,0,0.08)',
        'medium': '0 20px 60px rgba(0,0,0,0.12)',
        'glow': '0 6px 20px rgba(245,176,66,0.35)',
      },
    },
  },
  plugins: [],
}
