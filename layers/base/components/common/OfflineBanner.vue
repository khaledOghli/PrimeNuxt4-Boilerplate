<script setup lang="ts">
import { TransitionEffect } from '@base/enums/transitionEffect';
import { useOnline } from '@vueuse/core';

const online = useOnline();
const showOnlineBanner = ref(false);
const onlineBannerTimeout = 1000;
const bannerBg = computed(() => online.value ? 'bg-green-500 text-green-900' : 'bg-red-500 text-red-900');

watch(online, (newStatus) => {
  if (newStatus) {
    showOnlineBanner.value = true;
    setTimeout(() => {
      showOnlineBanner.value = false;
    }, onlineBannerTimeout); // Hide banner after 3 seconds
  }
});
</script>

<template>
  <div>
    <CommonTransition :effect="TransitionEffect.SLIDE_FADE_TOP">
      <div
        v-if="!online || showOnlineBanner"
        class="offline-banner"
        :class="bannerBg"
      >
        <span v-if="online">
          {{ $t('online') }}
        </span>
        <span v-else>
          {{ $t('offline') }}
        </span>
      </div>
    </CommonTransition>
  </div>
</template>

<style scoped>
.offline-banner {
  @apply fixed w-full h-40px flex items-center justify-center text-center inset-0 text-light-800 p-2 z-50;
}
.banner-enter-active,
.banner-leave-active {
  transition: opacity 0.5s;
}

.banner-enter, .banner-leave-to /* .banner-leave-active in <2.1.8 */ {
  opacity: 0;
}
:global(body:has(.offline-banner) .the_layout) {
  padding-top: 40px;
}
</style>
