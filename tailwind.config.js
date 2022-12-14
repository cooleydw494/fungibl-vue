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
        'fdark': 'rgba(26,26,26)',
      },
      fontSize: {
        '3xs': ['0.5rem', { lineHeight: '1' }],
        '2xs': ['0.6rem', { lineHeight: '1'}],
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
        '100vh': '100vh',
        '95vh': '95vh',
        '90vh': '90vh',
        '85vh': '85vh',
        '80vh': '80vh',
        '75vh': '75vh',
        '70vh': '70vh',
        '65vh': '65vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '35vh': '35vh',
        '30vh': '30vh',
        '15vh': '15vh',
        '100vw': '100vw',
        '95vw': '95vw',
        '90vw': '90vw',
        '85vw': '85vw',
        '80vw': '80vw',
        '75vw': '75vw',
        '70vw': '70vw',
        '65vw': '65vw',
        '60vw': '60vw',
        '50vw': '50vw',
        '40vw': '40vw',
        '35vw': '35vw',
        '30vw': '30vw',
        '15vw': '15vw',
      },
      screens: {
        xxs: '480px',
        xs: '568px',
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px',
        '3xl': '1760px',
        '4xl': '1920px',
      },
      opacity: {
        97: '0.97',
        98: '0.98',
      },
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('screens')
      }),
      maxHeight: ({ theme }) => ({
        ...theme('spacing'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
        '40vw': '40vw',
      }),
    },
  },
  plugins: [],
}
