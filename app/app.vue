<script setup lang="ts">
import '@base/assets/css/app.css';

const { $i18n } = useNuxtApp();
const nuxtApp = useNuxtApp();
const { locale, finalizePendingLocaleChange } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
  // titleTemplate(title) {
  //   return title ? `${title} - ${t('site.name')}` : `${t('site.name')}`;
  // },
});

nuxtApp.hook('page:transition:finish', async () => {
  await finalizePendingLocaleChange();
});
</script>

<template>
  <div>
    <AppGlobalComponents />
    <div
      class="app h-full"
      :class="`lang-${$i18n.locale.value}`"
    >
      <NuxtLayout>
        <NuxtPage
          :transition="{
            name: 'page',
            mode: 'out-in',
          }"
        />
      </NuxtLayout>
    </div>
  </div>
</template>
