<script setup lang="ts">
import { computed, ref } from 'vue';
import { sideMenuConfig } from '~/config/layouts';

const visible = ref(false);

// Computed property for sidebar styles
const sidebarInlineStyle = computed(() => ({
  width: sideMenuConfig.width,
  transitionDuration: sideMenuConfig.transitionDuration,
  backgroundColor: sideMenuConfig.backgroundColor,
  color: sideMenuConfig.textColor,
  position: 'fixed',
  top: '0',
  [sideMenuConfig.position]: '0',
  height: '95%',
  overflowX: 'hidden',
  transition: `width ${sideMenuConfig.transitionDuration}`,
}));

const containerStyle = {
  position: 'relative',
  width: sideMenuConfig.width,
  height: '100vh',
  margin: '20px',
};
</script>

<template>
  <div :style="containerStyle">
    <Button
      label="Toggle Sidebar"
      icon="pi pi-bars"
      @click="visible = !visible"
    />
    <Sidebar
      :visible="visible"
      :style="sidebarInlineStyle"
      @hide="visible = false"
    >
      <h2>{{ $t('menu.sidebar-content') }}</h2>
      <ul />
    </Sidebar>
  </div>
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
