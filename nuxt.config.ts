// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'lang', content: 'en' },
        { name: 'author', content: 'Stanko Bebek' },
        { name: 'description', content: 'Stanko Bebek\'s blog' },
        { name: 'keywords', content: 'PHP, JavaScript, Laravel, Vue, Linux, Figma, System design, Domain Driven Design, UI/UX' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
        },
      ],
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
