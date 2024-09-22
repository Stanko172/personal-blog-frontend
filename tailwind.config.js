/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand-background': '#121325',
        'brand-muted': '#605c9d1a',
        'brand-outline': '#1f213b',
        'brand-primary': '#58e6d9',
        'brand-secondary': '#a4a0fb',
        'brand-tertiary': '#f056c7',
        'brand-text': '#d9dbdf',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'p': {
              color: theme('colors.brand-text'),
            },
            'pre': {
              'background-color': 'inherit',
              'padding': '0',
              'border-radius': '0',
              'box-shadow': 'none',
              'font-family': 'inherit',
              'color': 'inherit',
              'overflow': 'visible',
            },
            'code': {
              'background-color': 'inherit',
              'padding': '0',
              'border-radius': '0',
              'box-shadow': 'none',
              'font-family': 'inherit',
              'color': 'inherit',
            },
            'pre code': {
              'background-color': 'inherit',
              'padding': '0',
              'border-radius': '0',
              'box-shadow': 'none',
              'font-family': 'inherit',
              'color': 'inherit',
            },
            'h1': {
              color: theme('colors.brand-primary'),
            },
            'h2, h3, h4, h5, h6': {
              color: theme('colors.brand-primary'),
            },
            'mark': {
              'background-color': 'inherit',
              'color': theme('colors.brand-tertiary'),
            },
            'a': {
              color: theme('colors.brand-secondary'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
