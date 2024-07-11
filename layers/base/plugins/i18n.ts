export default defineNuxtPlugin(async (nuxtApp: any) => {
  const { $i18n } = nuxtApp;

  // Utility function to change the direction of the document
  const changeDir = (dir: string) => {
    if (typeof window !== 'undefined' && window.document) {
      document.documentElement.setAttribute('dir', dir);
    }
  };

  // Event handler before language switch
  $i18n.onBeforeLanguageSwitch = async (
    _oldLocale: string,
    newLocale: string,
  ) => {
    const newDir = $i18n.locales.value.find((locale: any) => locale.code === newLocale).dir;
    changeDir(newDir);
  };

  // Event handler after language switch
  $i18n.onLanguageSwitched = async (_oldLocale: string, _newLocale: string) => {
    // Custom logic after language switch
  };

  // Hook to change the direction when the app is mounted
  nuxtApp.hook('app:mounted', () => {
    const currentLocale = $i18n.locales.value.find((locale: any) => locale.code === $i18n.locale.value);
    const currentDir = currentLocale ? currentLocale.dir : 'ltr';
    changeDir(currentDir);
  });

  return {
    provide: {
      t: (key: string) => $i18n.t(key),
    },
  };
});
