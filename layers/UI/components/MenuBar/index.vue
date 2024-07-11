<script setup lang="ts">
import type { MenuItem } from './MenuBar';

withDefaults(
  defineProps<{
    items?: Array<MenuItem>
  }>(),
  {
    items: () => [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ],
  },
);
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="bg-light-200 dark:bg-slate-900">
    <PrimeMenubar
      v-bind="$attrs"
      class="main_menubar"
      :model="items"
    >
      <template
        v-if="$slots.start"
        #start
      >
        <slot name="start" />
      </template>
      <template
        v-if="$slots.item"
        #item="{ item, props, hasSubmenu, root }"
      >
        <slot
          name="item"
          :item="item"
          :props="props"
          :has-submenu="hasSubmenu"
          :root="root"
        />
      </template>

      <template
        v-if="$slots.end"
        #end
      >
        <slot name="end" />
      </template>

      <template
        v-if="$slots.button"
        #button
      >
        <slot name="button" />
      </template>
    </PrimeMenubar>
  </div>
</template>

<style scoped>
  .main_menubar.p-menubar {
  @apply layout-container border-0 bg-transparent;
}
</style>
