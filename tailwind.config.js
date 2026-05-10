/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dss-green':  '#1B6B45',
        'dss-dark':   '#0F4A2E',
        'dss-light':  '#E8F5EE',
        'dss-coral':  '#E05A2B',
        'dss-sand':   '#F5F0E8',
        'dss-navy':   '#1A1A2E',
        'dss-gray':   '#64748B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
