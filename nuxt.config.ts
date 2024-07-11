// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';

const baseUrl = process.env.NUXT_PUBLIC_API_BASE;

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: baseUrl,
    },
  },

  compatibilityDate: '2024-07-08',
});
