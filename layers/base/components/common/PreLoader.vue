<script setup lang="ts">
const props = withDefaults(defineProps<{
  autoClose: boolean
}>(), {
  autoClose: false,
});

const pathEl = ref<SVGPathElement | null>(null);
const preloaderEl = ref<HTMLDivElement | null>(null);
const length = 4665;
const timer = {
  elFadeOut: 50,
  elRemove: 200,
};

function handleFadeOut() {
  setTimeout(() => {
    if (preloaderEl.value) {
      preloaderEl.value.classList.add('preloader-out');
      setTimeout(() => {
        if (preloaderEl.value)
          preloaderEl.value.remove();
      }, timer.elRemove);
    }
  }, timer.elFadeOut);
}

onMounted(() => {
  nextTick(() => {
    if (props.autoClose) {
      handleFadeOut();
    }
  });
});
</script>

<template>
  <div
    ref="preloaderEl"
    class="preloader_container bg-light-50 dark:bg-slate-900 !bg-opacity-90"
  >
    <div class="text-light-50">
      <svg
        width="200"
        height="200"
        viewBox="0 0 950 990"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref="pathEl"
          stroke-width="25"
          d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z"
        />

      </svg>
    </div>
  </div>
</template>

<style scoped>
.preloader_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: var(--p-primary-contrast-color); */
  backdrop-filter: blur(40px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
path {
  stroke: var(--p-primary-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: v-bind(length);
  stroke-dashoffset: v-bind(length);
  animation: dash 4s linear infinite;
}
</style>
