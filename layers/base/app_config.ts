// app_config.ts
import type { NuxtAppConfig } from '@nuxt/schema';
import process from 'node:process';

const baseUrl = process.env.BASE_URL || '/';

const appConfig: NuxtAppConfig = {
  keepalive: true,
  head: {
    viewport: 'width=device-width, initial-scale=1',
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: 'any',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/nuxt.svg',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
    ],
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content: 'Nuxt.js project',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: 'white',
      },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: '#222222',
      },
    ],
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in' as 'out-in' | 'default' | 'in-out', // Ensure this is one of the allowed values
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in' as 'out-in' | 'default' | 'in-out', // Ensure this is one of the allowed values
  },
};

export default appConfig;
