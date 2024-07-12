<script setup lang="ts">
const visible = ref(false);
</script>

<template>
  <VSidebar
    :visible="visible"
    @hide="visible = false"
  >
    <h2>{{ $t('menu.sidebar-content') }}</h2>
  </VSidebar>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  background-color: var(--hoverColor);
}
</style>
