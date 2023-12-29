// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨‍💻</text></svg>', 
        }
      ]
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
