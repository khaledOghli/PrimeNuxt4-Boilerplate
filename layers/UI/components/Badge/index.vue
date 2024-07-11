<script setup lang="ts">
import Badge from 'primevue/badge';
import type { IProps } from './Badge.d';

const props = defineProps<IProps>();

defineOptions({
  components: {
    PrimeBadge: Badge,
  },
  inheritAttrs: false,
});
</script>

<template>
  <PrimeBadge v-bind="{ ...$attrs, ...props }">
    <slot />
  </PrimeBadge>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
