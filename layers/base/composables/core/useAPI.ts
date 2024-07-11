import type { UseFetchOptions } from 'nuxt/app';
import type { Ref } from 'vue';

export function useAPI<T>(
  url: string | (() => string),
  options: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> },
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  });
}
