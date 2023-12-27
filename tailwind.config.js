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
        'brand-background': '#131127',
        'brand-muted': '#605c9d1a',
        'brand-outline': '#222240',
        'brand-primary': '#f056c7',
        'brand-secondary': '#a4a0fb',
        'brand-tertiary': '#58e6d9',
        'brand-text': '#d9dbdf',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
