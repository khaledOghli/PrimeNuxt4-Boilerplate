<script setup lang="ts">
import { nuxtLoadingIndicator } from '@base/config/layouts';
</script>

<template>
  <NuxtLoadingIndicator
    :color="nuxtLoadingIndicator.color"
    :error-color="nuxtLoadingIndicator.errorColor"
    :height="nuxtLoadingIndicator.height"
    :duration="nuxtLoadingIndicator.duration"
    :throttle="nuxtLoadingIndicator.throttle"
  />
</template>
