// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';
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
  alias: {
    '@base': path.resolve(__dirname, 'layers/base'),
    '@ui': path.resolve(__dirname, 'layers/UI'),
    '@app': path.resolve(__dirname, 'app'),
  },
  vite: {
    resolve: {
      alias: {
        '@base': path.resolve(__dirname, 'layers/base'),
        '@app': path.resolve(__dirname, 'app'),
        '@ui': path.resolve(__dirname, 'layers/UI'),
      },
    },
  },
  compatibilityDate: '2024-07-08',
});
