<script setup lang="ts">
import { playIconAnimation, stopIconAnimation } from '@base/utils/iconsAnimation';

const color = useColorMode();
const iconRef = ref();
useHead({
  meta: [
    {
      id: 'theme-color',
      name: 'theme-color',
      content: () => (color.value === 'dark' ? '#222222' : '#ffffff'),
    },
  ],
});
watch(
  color,
  (newColor) => {
    if (window) {
      const root = window.document.documentElement;
      if (newColor.value === 'dark' && newColor.preference === 'dark')
        root.classList.add('p-dark');
      else if (newColor.value === 'light' && newColor.preference === 'light')
        root.classList.remove('p-dark');
      else if (newColor.value === 'light' && newColor.preference === 'system')
        root.classList.remove('p-dark');
      else if (newColor.value === 'dark' && newColor.preference === 'system')
        root.classList.add('p-dark');
    }
  },
  { immediate: true },
);
</script>

<template>
  <form
    class="flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50 px-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
    @mouseenter="playIconAnimation(iconRef)"
    @mouseleave="stopIconAnimation(iconRef)"
  >
    <label
      class="flex items-center justify-center"
      for="themes"
    >
      <IconsBrightnessHalf
        ref="iconRef"
        class="icon-color h-7 w-7"
      />
    </label>

    <VSelect
      v-model="$colorMode.preference"
      input-id="themes"
      placeholder="Select an option"
      class="mx-1 text-sm"
      :options="[
        { label: 'System', value: 'system' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ]"
      option-label="label"
      option-value="value"
      option-disabled="disabled"
    />
  </form>
</template>
