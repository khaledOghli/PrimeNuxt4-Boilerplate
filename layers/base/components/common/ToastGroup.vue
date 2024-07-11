<script setup lang="ts">
import Toast from 'primevue/toast';
import { ToastPosition } from '@base/composables/ui/useToaster';

const defaultToastPosition = ToastPosition.TopRight;
</script>

<template>
  <div>
    <Toast :position="defaultToastPosition" />
  </div>
</template>
