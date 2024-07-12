<script setup lang="ts">
import { TransitionEffect } from '@base/enums/TransitionEffect';
import type { TransitionProps } from '@base/interfaces/transitions';

const props = withDefaults(defineProps<TransitionProps>(), {
  effect: TransitionEffect.SLIDE_FADE_RIGHT,
});
</script>

<template>
  <Transition
    :name="props.effect"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>

<style scoped>
  /* Common styles for transitions */
.fade-enter-active,
.slide-fade-right-enter-active,
.slide-fade-bottom-enter-active,
.slide-fade-top-enter-active,
.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active,
.slide-fade-right-leave-active,
.slide-fade-bottom-leave-active,
.slide-fade-top-leave-active,
.slide-fade-left-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-bottom-enter-from,
.slide-fade-bottom-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-top-enter-from,
.slide-fade-top-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
