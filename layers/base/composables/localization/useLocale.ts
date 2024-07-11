import type { ComputedRef, Ref } from 'vue';
import { computed, ref, unref } from 'vue';
import { useI18n } from 'vue-i18n';

// Common types for locales
type Locale = Ref<string> | string;
type LocalesArray = string[];

// Interface for the locale object
interface LocaleObject {
  value: string
}

// Define the functions with the defined interfaces
export function useLocale(): LocaleObject {
  const { locale } = useI18n();
  return locale;
}

export function useDefaultLocale(fallback: string = 'en'): LocaleObject {
  const { locale, setLocaleMessage } = useI18n();
  const defaultLocale = ref(fallback);

  if (import.meta.server) {
    const reqLocale = useRequestHeaders()?.['accept-language']?.split(',')[0];
    if (reqLocale) {
      defaultLocale.value = reqLocale;
      setLocaleMessage(reqLocale, {}); // Set the locale messages if needed
    }
  }
  else if (import.meta.client) {
    const navLang = navigator.language;
    if (navLang) {
      defaultLocale.value = navLang;
      setLocaleMessage(navLang, {}); // Set the locale messages if needed
    }
  }

  locale.value = defaultLocale.value;
  return locale;
}

export function useLocales(): Ref<LocalesArray> {
  const { locale, availableLocales } = useI18n();
  const locales = ref([...availableLocales]);

  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value);
  }

  return locales;
}

// Formatting functions
function formatDate(date: Ref<Date> | Date, options: Intl.DateTimeFormatOptions, locale: Locale): string {
  const formattedDate = new Intl.DateTimeFormat(unref(locale), options).format(unref(date));
  return formattedDate;
}

export function useLocaleDate(date: Ref<Date> | Date, locale: LocaleObject = useLocale()): ComputedRef<string> {
  return computed(() => formatDate(date, { dateStyle: 'full' }, locale.value));
}

export function useLocaleDateWithTime(date: Ref<Date> | Date, locale: LocaleObject = useLocale()): ComputedRef<string> {
  return computed(() =>
    formatDate(date, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Dubai',
    }, locale.value),
  );
}

export function useLocaleOnlyTime(date: Ref<Date> | Date, locale: LocaleObject = useLocale()): ComputedRef<string> {
  return computed(() =>
    formatDate(date, {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Dubai',
    }, locale.value),
  );
}
