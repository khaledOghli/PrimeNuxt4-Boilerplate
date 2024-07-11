<script setup lang="ts">
import json from '~/assets/json/icons/Globe.json';

const lottieRef = ref();

function playAnimation() {
  lottieRef.value?.playAnimation();
}

function stopAnimation() {
  lottieRef.value?.stopAnimation();
}

defineExpose({ playAnimation, stopAnimation });
</script>

<template>
  <CommonLottie
    ref="lottieRef"
    :loop="true"
    :json="json"
  />
</template>
