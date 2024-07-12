import path from 'node:path';
import process from 'node:process';
import app from './app_config';
import { pwa } from './config/pwa';

/* eslint-disable no-magic-numbers */
const oneYear = 1000 * 60 * 60 * 24 * 365;
const isDevelopment = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-module-eslint-config',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@unocss/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@dargmuesli/nuxt-cookie-control',
    // '@nuxtjs/storybook',
    'nuxt-lodash',
    'nuxt-viewport',
    'nuxt-icons',
    'nuxt-time',
    '@nuxt/scripts',
    '@unlazy/nuxt',
    'nuxt-security',
    '@nuxtjs/sitemap',
  ],

  security: {
    headers: {
      crossOriginEmbedderPolicy: isDevelopment ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: {
        'img-src': [
          'https://primefaces.org/cdn/primevue/images/',
          'http://localhost:3000/',
          'https://primenuxt4.vercel.app/',
        ],
      },
    },
  },

  image: {
    provider: 'ipx',
    quality: 80,
    format: ['png', 'jpeg', 'webp'],
  },

  viewport: {
    breakpoints: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    cookie: {
      expires: 365, // 365 days
      name: 'viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true,
    },

    fallbackBreakpoint: 'lg',
  },

  site: {
    url: 'https://primenuxt4.vercel.app/', // site url
  },

  imports: {
    dirs: [
      './enums/global',
      './types/global',
      'interfaces/global',
      'composables/**',
      './stores',
    ],
  },

  alias: {
    '@base': path.resolve(__dirname),
    '@ui': path.resolve(__dirname, '../UI'),
    '@app': path.resolve(__dirname, '../../app'),
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  colorMode: {
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
    preference: 'light', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  // build: {
  //   transpile: ['primevue','vee-validate', 'primeicons', 'sweetalert2'],
  // },
  primevue: {
    /* Options */
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
    autoImport: true,
    components: {
      prefix: 'Prime',
    },
    importTheme: { from: '@/primevue.theme.js' },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        id: 2,
        code: 'ar',
        iso: 'ar-AE',
        name: 'Arabic',
        file: {
          path: 'ar.ts',
          cache: true,
        },
        dir: 'rtl',
        rtl: true,
        flagImageFileName: 'ae.png',
      },
      {
        id: 1,
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: {
          path: 'en.ts',
          cache: true,
        },
        dir: 'ltr',
        rtl: false,
        flagImageFileName: 'en.png',
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config',
    lazy: true,
    langDir: 'locales',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root', // recommended
    },
    // pages: {
    //   form: {
    //     en: '/form',
    //     fr: '/form',
    //   },
    // },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
      // stylistic: true,
    },
  },

  cookieControl: {
    cookieExpiryOffsetMs: oneYear, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    locales: ['en', 'ar'],
  },

  app,
  compatibilityDate: '2024-07-08',
});
