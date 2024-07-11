<script setup lang="ts">
import type { IProps } from './Button.d';

const props = defineProps<IProps>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <PrimeButton v-bind="{ ...$attrs, ...props }">
    <template
      v-if="$slots.default"
      #default
    >
      <slot name="default" />
    </template>
    <template
      v-if="$slots.icon"
      #icon
    >
      <slot name="icon" />
    </template>
    <template
      v-if="$slots.loadingicon"
      #loadingicon
    >
      <slot name="loadingicon" />
    </template>
  </PrimeButton>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
