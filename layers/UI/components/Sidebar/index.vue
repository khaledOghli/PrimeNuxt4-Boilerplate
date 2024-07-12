<script setup lang="ts">
import { sideMenuConfig } from '@base/config/layouts';
import { computed, ref } from 'vue';

const visible = ref(false);

// Computed property for sidebar styles

const sidebarInlineStyle: any = computed(() => ({
  width: `${sideMenuConfig.width}px`,
  transitionDuration: sideMenuConfig.transitionDuration,
  backgroundColor: sideMenuConfig.backgroundColor,
  color: sideMenuConfig.textColor,
  position: 'fixed',
  top: '2%',
  bottom: '2%',
  insetInline: `${sideMenuConfig.insetInline}px`,
  height: '96%',
  overflowX: 'hidden',
  transition: `width ${sideMenuConfig.transitionDuration}`,
  borderRadius: '0.5rem',
}));

const containerStyle: any = {
  width: `${sideMenuConfig.width + (sideMenuConfig.insetInline * 2)}px`,
};
</script>

<template>
  <div
    class="relative h-100vh"
    :style="containerStyle"
  >
    <div
      :visible="visible"
      :style="sidebarInlineStyle"
      @hide="visible = false"
    >
      <VButton
        label="Toggle Sidebar"
        icon="pi pi-bars"
        @click="visible = !visible"
      />
      <h2>{{ $t('menu.sidebar-content') }}</h2>
    </div>
  </div>
</template>
