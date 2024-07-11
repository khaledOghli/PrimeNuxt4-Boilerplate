const SUCCESS_STATUS = 200;

export default defineI18nLocale((locale: string) => {
  const Locales = useState('Locales-ar');
  if (Locales.value) {
    return Locales.value;
  }
  const response = $fetch('/api/locales', {
    headers: {
      'Accept-Language': locale,
    },
    onResponse({ response }) {
      if (response.status === SUCCESS_STATUS) {
        Locales.value = response._data;
      }
      else {
        console.error('Failed to fetch locales', response);
      }
    },
  });

  return response;
});
