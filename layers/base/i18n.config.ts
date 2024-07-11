export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  defaultLocale: 'en',
  fallbackLocale: 'ar',
}));

export function translate(key: string) {
  const { $i18n } = useNuxtApp();
  return $i18n.t(key);
}
