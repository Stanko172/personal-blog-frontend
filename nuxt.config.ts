// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt'],
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/home/index.vue',
      })
    },
  },
  typescript: {
    typeCheck: true,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  telemetry: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
