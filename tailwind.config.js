/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './public/index.html',
    './src/components/*.{vue,js,ts}',
    './src/components/views/*.vue',
    './src/components/utilities/*.vue'
  ],
  safelist: [
    {
      pattern: /border-f.*/,
    },
    {
      pattern: /.*f(white|green|yellow|orange|pink|blue|aqua|blurple|darkblue|dark).*/,
    },
  ],
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
        'fdark': 'rgba(26,26,26,.25)',
      },
      fontSize: {
        'xxs': '.65rem',
      },
      fontWeight: {
        'bolder': '750',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        68: '17rem',
        76: '19rem',
        88: '22rem',
        n4: '-1rem',
      },
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}
