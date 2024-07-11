export default defineNuxtPlugin(async () => {
  const { session } = useUserSession();
  // const cookie = useCookie('token');
  // const config = useRuntimeConfig();
  const { $i18n } = useNuxtApp();
  const locale: any = $i18n.locale;
  const unAuthorizedCode = 401;
  const api = $fetch.create({
    baseURL: import.meta.env.NUXT_PUBLIC_API_BASE,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale.value,
    },
    async onRequest({ request, options }) {
      console.log('onRequest', request);
      if (session.value?.token && session.value?.token !== null) {
        const headers = options.headers ||= {};
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${session.value?.token}`]);
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${session.value?.token}`);
        }
        else {
          headers.Authorization = `Bearer ${session.value?.token}`;
        }
      }
      else {
        console.log('session error');
        // await navigateTo('/auth/login');
      }
    },
    async onResponseError({ response }) {
      console.log('onResponseError', response);
      if (response.status === unAuthorizedCode) {
        await navigateTo('/auth/login');
      }
    },
  });
  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
