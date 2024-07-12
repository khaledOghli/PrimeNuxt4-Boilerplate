<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <div>
    <SpeedInsights />
    <CommonPageLoadingIndicator />
    <DevOnly>
      <CommonGridCols />
    </DevOnly>
    <CommonToastGroup />
    <CommonOfflineBanner />
    <!-- <VitePwaManifest /> -->
    <!-- <CommonCookieBanner /> -->
    <CommonPreLoader :auto-close="true" />
  </div>
</template>
