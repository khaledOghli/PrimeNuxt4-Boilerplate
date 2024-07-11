<script setup lang="ts">
import PrimeDrawer from 'primevue/drawer';
import type { IProps } from './Drawer.d';

const props = defineProps<IProps>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <PrimeDrawer
    class="v-drawer"
    v-bind="{ ...$attrs, ...props }"
  >
    <template
      v-if="$slots.default"
      #default
    >
      <slot />
    </template>
    <template
      v-if="$slots.header"
      #header="{ class: headerClass }"
    >
      <slot
        name="header"
        :class="headerClass"
      />
    </template>
    <template
      v-if="$slots.closeicon"
      #closeicon="{ class: iconClass }"
    >
      <slot
        name="closeicon"
        :class="iconClass"
      />
    </template>
    <template
      v-if="$slots.container"
      #container="{ closeCallback }"
    >
      <slot
        name="container"
        :close-callback="closeCallback"
      />
    </template>
    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </PrimeDrawer>
</template>

<style scoped>
/* Fixed Lib Drawer Transtion Animation in RTL mode  */
:global(html[dir='rtl'] .v-drawer.p-drawer-enter) {
  transform: translate3d(100%, 0, 0);
}
:global(html[dir='rtl'] .p-drawer-open .v-drawer.p-drawer-enter-active) {
  transform: translate3d(100%, 0, 0);
}
:global(html[dir='rtl'] .p-drawer-open .v-drawer.p-drawer-enter-to) {
  transform: translate3d(0%, 0, 0);
}
:global(html[dir='rtl'] .v-drawer.p-drawer-leave) {
  transform: translate3d(100%, 0, 0);
}
:global(html[dir='rtl'] .p-drawer-open .v-drawer.p-drawer-leave-active) {
  transform: translate3d(100%, 0, 0);
}
:global(html[dir='rtl'] .p-drawer-open .v-drawer.p-drawer-leave-to) {
  transform: translate3d(100%, 0, 0);
}
</style>
