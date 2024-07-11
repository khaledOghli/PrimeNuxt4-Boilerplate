<script setup lang="ts">
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
// useHeadSafe({
//   htmlAttrs: {
//     dir: locale.value == 'ar' ? 'rtl' : 'ltr',
//   },
// });
</script>

<template>
  <div class="flex">
    <AppSideMenu />
    <div class="the_layout main_container min-h-screen card-bg">
      <AppHeader />
      <div class="main_content layout-container">
        <div class="card-layout">
          <slot />
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
