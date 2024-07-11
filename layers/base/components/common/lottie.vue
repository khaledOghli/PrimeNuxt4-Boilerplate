<script setup lang="ts">
interface Props {
  json: object
  loop?: boolean
}

const props = defineProps<Props>();
const { lavContainer, playAnimation, stopAnimation } = useLottie(props.json, props.loop);

defineExpose({ playAnimation, stopAnimation });
</script>

<template>
  <div
    ref="lavContainer"
    :style="{ overflow: 'hidden' }"
  />
</template>
