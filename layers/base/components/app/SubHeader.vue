<script setup lang="ts">
import { headerMenuConfig } from '@base/config/layouts';
import menuItems from '@base/constants/menuItems';
import { playIconAnimation, stopIconAnimation } from '@base/utils/iconsAnimation';
import { useMediaQuery } from '@vueuse/core';

const localePath = useLocalePath();
// const items = ref<typeof menuItems>(menuItems);
const items = computed<typeof menuItems>(() => menuItems);
const iconRef = ref();
const visible = ref(false);
const isLargeScreen = useMediaQuery(`(max-width: ${headerMenuConfig.responsiveBreakpoint}px)`);

watch(() => isLargeScreen.value, (value) => {
  if (!value) {
    visible.value = false;
  }
});
</script>

<template>
  <div class="bg-light-200 dark:bg-slate-900">
    <VDrawer v-model:visible="visible">
      <template #header>
        <div class="flex items-center gap-2">
          <PrimeAvatar
            image="/apple-touch-icon.png"
            shape="circle"
          />
          <span class="font-bold">
            {{ $t('header.user-name') }}
          </span>
        </div>
      </template>
      <p>
        {{ $t('menu.drawer-test-description') }}
      </p>
      <template #footer>
        <div class="flex items-center gap-2">
          <PrimeButton
            label="Account"
            icon="pi pi-user"
            class="flex-auto"
            outlined
          />
          <PrimeButton
            label="Logout"
            icon="pi pi-sign-out"
            class="flex-auto"
            severity="danger"
            text
          />
        </div>
      </template>
    </VDrawer>

    <VMenuBar
      :items="items"
      :breakpoint="`${headerMenuConfig.responsiveBreakpoint}px`"
    >
      <template #start>
        <RouterLink
          :to="localePath({ path: '/' })"
          active-class=""
        >
          <IconsHome
            ref="iconRef"
            class="icon-color h-10 w-10"
            @mouseenter="playIconAnimation(iconRef)"
            @mouseleave="stopIconAnimation(iconRef)"
          />
        </RouterLink>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <RouterLink
          v-ripple
          :to="localePath({ name: item.routeName })"
          class="align-items-center flex"
          v-bind="props.action"
        >
          <span>{{ $t(item.label) }}</span>
          <span
            v-if="item.shortcut"
            class="surface-border surface-100 border-round ml-auto border-1 p-1 text-xs"
          >{{ item.shortcut }}</span>
          <i
            v-if="hasSubmenu"
            class="pi pi-angle-down"
            :class="[
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          />
        </RouterLink>
      </template>
      <template #end>
        <div class="align-items-center flex gap-2">
          <div class="flex flex-row gap-4 sm:flex-row">
            <CommonThemeSwitcher />
            <CommonLangSwitcher />
          </div>
        </div>
      </template>
      <template #button>
        <ClientOnly>
          <PrimeButton
            v-if="isLargeScreen"
            icon="pi pi-plus"
            @click="visible = true"
          />
        </ClientOnly>
      </template>
    </VMenuBar>
  </div>
</template>

<style scoped>
:deep(.p-menubar .p-menubar-end) {
  margin-left: 0;
  margin-right: 0;
  margin-inline-start: auto;
}
:deep(.router-link-active) {
  background-color: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  @apply rounded;
}
:deep(.p-menubar-mobile-active .p-menubar-root-list) {
  display: none;
}
:deep(.p-menubar-button) {
  display: none;
}
</style>
