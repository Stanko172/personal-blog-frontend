// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Stanko Bebek\'s blog',
    },
  },
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt'],
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
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
