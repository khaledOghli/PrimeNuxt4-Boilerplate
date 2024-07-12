<script setup lang="ts">
import { playIconAnimation, stopIconAnimation } from '@base/utils/iconsAnimation';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i: { code: string }) => i.code !== locale.value);
});
const iconRef = ref();
</script>

<template>
  <div class="h-full flex items-center">
    <NuxtLink
      v-for="(iLocale, index) in availableLocales"
      :key="iLocale.code"
      :to="switchLocalePath(iLocale.code)"
      @click="$i18n.setLocale(iLocale.code)"
    >
      <button
        type="button"
        class="h-full flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
        @mouseenter="playIconAnimation(iconRef[index])"
        @mouseleave="stopIconAnimation(iconRef[index])"
      >
        <IconsGlobe
          ref="iconRef"
          class="icon-color h-7 w-7"
        />

        <span class="mx-2">
          {{ iLocale.name }}
        </span>
      </button>
    </NuxtLink>
  </div>
</template>
