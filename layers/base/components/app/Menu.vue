<script setup lang="ts">
import { headerMenuConfig } from '@base/config/layouts';
import { megaMenuItems, menuItems } from '@base/constants/menuItems';
import { useElementBounding, useMediaQuery } from '@vueuse/core';
import Popover from 'primevue/popover';

const localePath = useLocalePath();
// const items = ref<typeof menuItems>(menuItems);
const hiddenItems = ref([]);
const megaMenuBtnX = ref(0);
const visible = ref(false);
const megaMenuBtn = ref();
const submenu = ref();
const op = ref();
const items = computed<typeof menuItems>(() => menuItems);
const megaItems = computed<typeof megaMenuItems>(() => [...megaMenuItems, ...hiddenItems.value]);
const isLargeScreen = useMediaQuery(`(max-width: ${headerMenuConfig.responsiveBreakpoint}px)`);
const megaMenuBtnXComputed = computed(() => `${megaMenuBtnX.value}px`);

const { x } = useElementBounding(megaMenuBtn);

function toggle(event) {
  op.value.toggle(event);
}
function changeMegaMenuX() {
  debugger;
  megaMenuBtnX.value = x.value + 5;
  document.documentElement.style.setProperty('--p-mega-menu-x', megaMenuBtnXComputed.value);
}
function checkWrapping() {
  nextTick(() => {
    const submenuElement = submenu.value;
    if (!submenuElement)
      return;

    const linkElements = submenuElement.querySelectorAll('.menu-item');
    const previousBottom = linkElements[0].getBoundingClientRect().bottom;

    hiddenItems.value = []; // Clear the hiddenItems array

    linkElements.forEach((link) => {
      link.classList.remove('wrapped'); // Remove wrapped class initially
    });

    linkElements.forEach((link) => {
      const linkBottom = link.getBoundingClientRect().bottom;
      if (linkBottom > previousBottom) {
        link.classList.add('wrapped');
        // get the object from menuItems array
        const menuItem = items.value.find(item => item.id === link.id);
        if (!hiddenItems.value.includes(link)) {
          hiddenItems.value.push(menuItem);
        }
      }
    });
  });
}
watch(() => isLargeScreen.value, (value) => {
  if (!value) {
    visible.value = false;
  }
});
onMounted(async () => {
  checkWrapping();
  nextTick(() => {
    changeMegaMenuX();
  });
  window.addEventListener('resize', changeMegaMenuX);
  window.addEventListener('resize', checkWrapping);
});
onUnmounted(() => {
  window.removeEventListener('resize', changeMegaMenuX);
});
</script>

<template>
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
  <div
    ref="submenu"
    class="h-auto bg-light-200 py-2 dark:bg-slate-900"
  >
    <div class="h-full flex items-center gap-4 layout-container">
      <div>
        <ClientOnly>
          <PrimeButton
            v-if="isLargeScreen"
            icon="pi pi-plus"
            @click="visible = true"
          />
        </ClientOnly>
        <div v-if="!isLargeScreen">
          first
        </div>
      </div>
      <div class="flex flex-auto">
        <div v-if="!isLargeScreen">
          <ul class="flex flex-wrap gap-4">
            <li
              v-for="item in items"
              :id="item.id"
              :key="item.id"
              class="menu-item flex items-center gap-4"
            >
              <RouterLink
                class="px-4 py-2"
                :to="`${localePath}${item.route}`"
                :class="{ 'router-link-active': $route.path === `${localePath}${item.route}` }"
              >
                {{ $t(item.label) }}
              </RouterLink>
            </li>
            <li>
              <PrimeButton
                ref="megaMenuBtn"
                icon="pi pi-ellipsis-h"
                class="mega_menu-btn"
                outlined
                rounded
                aria-label="Filter"
                severity="contrast"
                @click="toggle"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div v-if="!isLargeScreen">
          <ul class="flex gap-4">
            <li>
              <PrimeButton
                label="Account"
                icon="pi pi-user"
                class="flex-auto"
                outlined
              />
            </li>
            <li>
              <PrimeButton
                label="Logout"
                icon="pi pi-sign-out"
                class="flex-auto"
                severity="danger"
                text
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Popover
      ref="op"
      class="mega_menu-popover"
    >
      <div class="w-full flex flex-col gap-4">
        <div class="px-4 py-2">
          <ul class="flex flex-wrap gap-4">
            <li
              v-for="item in megaItems"
              :id="item.id"
              :key="item.id"
              class="menu-item flex items-center gap-4"
            >
              <RouterLink
                class="px-4 py-2"
                :to="`${localePath}${item.route}`"
                :class="{ 'router-link-active': $route.path === `${localePath}${item.route}` }"
              >
                {{ $t(item.label) }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  </div>
</template>

<style scoped>
:global(:root) {
  --p-mega-menu-x: 0;
}
:global(.wrapped) {
  display: none; /* Or any other style you want to apply to wrapped links */
}

:global(.mega_menu-popover) {
  left: 1% !important;
  width: 98%;
}
:global(.p-popover:before),
:global(.p-popover:after) {
  left: var(--p-mega-menu-x) !important;
}
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
