import { useAuthStore } from '@base/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const nuxt = useNuxtApp();
  const auth = useAuthStore();
  const router = useRouter();

  if (!auth.loggedIn) {
    const path = nuxt.$localePath('/auth/login');
    return router.push({
      path,

      query: {
        next: to.path,
      },
    });
  }
  else {
    return router.push({
      path: nuxt.$localePath('/dashboard'),
      query: {
        from: to.path,
      },
    });
  }
});
