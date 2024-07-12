
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
  // alias: {
  //   '@ui': path.resolve(__dirname),
  //   '@app': path.resolve(__dirname, '../../app'),
  //   '@base': path.resolve(__dirname, '../base'),
  // },
  // vite: {
  //   resolve: {
  //     alias: {
  //       '@ui': path.resolve(__dirname),
  //       '@app': path.resolve(__dirname, '../../app'),
  //       '@base': path.resolve(__dirname, '../base'),
  //     },
  //   },
  // },
});
