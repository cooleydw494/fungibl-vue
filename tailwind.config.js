/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/components/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fwhite': '#F9F9F9',
        'fgreen': '#D8FF7A',
        'fyellow': '#FFD600',
        'forange': '#FF6C37',
        'fpink': '#FD8BB6',
        'fblue': '#32C2FB',
        'faqua': '#10CFC9',
        'fblurple': "#6069F2",
        'fdarkblue': '#1D1934',
        'fdark': '#1A1A1A',
      },
      fontSize: {
        'xxs': '.65rem',
      },
    },
  },
  plugins: [],
}
