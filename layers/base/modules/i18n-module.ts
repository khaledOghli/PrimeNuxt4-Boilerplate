import { defineNuxtModule } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'i18n-module',
    configKey: 'i18n',
  },
  setup(_, _nuxt) {
    // console.log(_nuxt.options.i18n);
    // const { resolve } = createResolver(import.meta.url);
    // nuxt.options.i18n = {};
  },
});
