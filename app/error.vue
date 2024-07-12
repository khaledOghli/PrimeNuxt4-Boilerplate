<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError
  clearError: () => void
}>();
const nuxtApp = useNuxtApp();

const handleError = () => clearError({ redirect: '/' });

nuxtApp.hook('app:error:cleared', () => {
  console.clear();
});
</script>

<template>
  <div>
    <AppGlobalComponents />
    <div
      class="app h-full"
      :class="`lang-${$i18n.locale}`"
    >
      <NuxtLayout>
        <h2>{{ props.error.statusCode }}</h2>
        <VButton
          :label="$t('clear-errors')"
          @click="handleError"
        />
      </NuxtLayout>
    </div>
  </div>
</template>
