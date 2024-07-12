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
  <div class="w-full flex bg-slate-100">
    <AppSideMenu />
    <div class="the_layout main_container min-h-screen flex-auto">
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
