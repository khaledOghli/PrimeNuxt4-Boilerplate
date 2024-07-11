<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="sticky_footer py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
    <div class="mx-auto max-w-screen-lg px-8 container">
      <p>
        ©
        {{ year }}
        -
        {{ $t('site.name') }}
      </p>
    </div>
  </footer>
</template>
