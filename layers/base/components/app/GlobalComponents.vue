<template>
  <div>
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
