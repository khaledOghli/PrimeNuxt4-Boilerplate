<script lang="ts" setup>
// $route.meta.layout
const route = useRoute();
const layout = route.meta.layout;
const styleDependOnLayout = computed(() => {
  if (layout === 'admin')
    return 'admin_grid';
  return 'default_grid';
});
</script>

<template>
  <div
    :class="styleDependOnLayout"
    class="untouchable fixed left-[50%] z-[999] h-[100vh] container"
  >
    <div class="grid grid-cols-12 h-full w-full gap-6">
      <div
        v-for="i in 12"
        :key="i"
        padding="p-10"
        class="col-span-2 border border-blue-400 border-opacity-25 border-dashed bg-blue-500 bg-opacity-5 lg:col-span-1 md:col-span-1 sm:col-span-2 [&:nth-of-type(n+7)]:hidden md:[&:nth-of-type(n+7)]:block sm:[&:nth-of-type(n+7)]:hidden"
      />
    </div>
  </div>
</template>

<style scoped>
.default_grid {
  width: 100%;
  transform: translateX(-50%);
}
.admin_grid {
  width: 100%;
  transform: translateX(-50%);
  /* margin-inline-start: 145px;
  margin-inline-end: -145px; */
  /* padding-inline-end: 145px; */
}
</style>
