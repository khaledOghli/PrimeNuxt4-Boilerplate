import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
// import 'primevue/resources/primevue.min.css';
import '../layers/base/assets/css/app.css';
// import '../public/themes/aura-light-blue/theme.css';

// import "@fontsource/roboto/400.css";

// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
import { addons } from '@storybook/preview-api';
import { h } from 'vue';
import {
  type DefaultLocaleMessageSchema,
  type LocaleMessages,
  createI18n,
} from 'vue-i18n';
// import options from "../vuetify-options";
// import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";
import { themeLocaleModes } from './modes';

function loadLocaleMessages(): LocaleMessages<DefaultLocaleMessageSchema> {
  const locales = import.meta.glob('../layers/base/locales/*.json', {
    as: 'raw',
    eager: true,
  });

  const messages: LocaleMessages<DefaultLocaleMessageSchema> = {};

  for (const path in locales) {
    const matched = path.match(/([\w-]+)\./);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = JSON.parse(locales[path]);
    }
  }
  return messages;
}

const i18n = createI18n({
  legacy: false,
  messages: loadLocaleMessages(),
});

setup((app) => {
  // app.use(createVuetify({ ...options, components }));
  app.use(i18n);
  app.use(PrimeVue, { ripple: true });
});

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    // defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'light', title: 'Light', icon: 'circlehollow' },
        { value: 'dark', title: 'Dark', icon: 'circle' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      mobile: { name: 'Mobile', styles: { width: '360px', height: '720px' } },
      tablet: { name: 'Tablet', styles: { width: '1024px', height: '768px' } },
      desktop: {
        name: 'Desktop',
        styles: { width: '1920px', height: '1080px' },
      },
    },
  },
  chromatic: {
    modes: themeLocaleModes,
  },
};

export const globals = {
  locales: {
    en: 'English',
    ar: 'Arabic',
  },
};

const DEFAULT_LOCALE = 'en';

function withLocale(storyFn: () => any, context: { globals: { locale: string }, args: any }) {
  i18n.global.locale.value = context.globals.locale || DEFAULT_LOCALE;

  return () => {
    return h(storyFn(), { ...context.args });
  };
}

export const decorators = [withLocale];

addons.getChannel().on('LOCALE_CHANGED', (newLocale) => {
  i18n.global.locale.value = newLocale;
});
