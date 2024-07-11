// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: './components',
      prefix: 'V',
    },
  ],
  modules: ['@nuxtjs/i18n'],
  compatibilityDate: '2024-07-08',
});
