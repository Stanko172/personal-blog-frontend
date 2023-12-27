// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt'],
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/index.vue',
      })
    },
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
