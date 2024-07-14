<script setup lang="ts">
import { sideMenuConfig } from '@base/config/layouts';
import { computed, ref } from 'vue';

const visible = ref(false);

// Computed property for sidebar styles
const sideMenuSharedStyles = computed(() => ({
  height: 'calc(100% - 2rem)',
  top: '1rem',
}));
const miniSidebarStyle = computed(() => ({
  width: '88px',
  insetInlineStart: '1rem',
  ...sideMenuSharedStyles.value,
}));
const sidebarInlineStyle: any = computed(() => ({
  width: `calc(${miniSidebarStyle.value.width} + ${sideMenuConfig.width}px)`,
  transitionDuration: sideMenuConfig.transitionDuration,
  color: sideMenuConfig.textColor,
  position: 'fixed',
  top: sideMenuSharedStyles.value.top,
  insetInline: `calc(${miniSidebarStyle.value.width} + ${miniSidebarStyle.value.insetInlineStart} + 5px)`,
  height: sideMenuSharedStyles.value.height,
  overflowX: 'hidden',
  transition: `width ${sideMenuConfig.transitionDuration}`,
  borderRadius: '0.5rem',
}));

const containerStyle: any = {
  width: `calc(${`${sideMenuConfig.width}px + ${miniSidebarStyle.value.width} + ${sideMenuConfig.insetInline}`}px + 5px)`,
};
</script>

<template>
  <!--  -->
  <div>
    <div
      :style="miniSidebarStyle"
      class="fixed h-full w-[88px] w-auto flex justify-between rounded-2xl bg-slate-200 p-5 dark:bg-slate-900"
    >
      <div class="flex flex-col justify-between">
        <div class="w-12 flex flex-col items-center">
          <div class="flex items-center gap-3">
            <div class="h-11 w-11 flex items-center justify-center border border-primary-400 rounded-xl">
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M14.65 11.0645L13.1283 10.7253L14.3119 12.4216V17.6803L18.3698 14.2876V8.52002L16.5099 9.19856L14.65 11.0645Z"
                fill="var(--p-primary-color)"
              /><path
                d="M5.18078 11.0645L6.70251 10.7253L5.51894 12.4216V17.6803L1.46098 14.2876V8.52002L3.32088 9.19856L5.18078 11.0645Z"
                fill="var(--p-primary-color)"
              /><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.02649 12.7634L7.37914 10.7278L8.22455 11.2367H11.6062L12.4516 10.7278L13.8042 12.7634V20.397L12.7898 21.9237L11.6062 23.1111H8.22455L7.04098 21.9237L6.02649 20.397V12.7634Z"
                fill="var(--p-primary-color)"
              /><path
                d="M14.311 20.9058L16.5091 18.7005V16.4952L14.311 18.3612V20.9058Z"
                fill="var(--p-primary-color)"
              /><path
                d="M5.51868 20.9058L3.32062 18.7005V16.4952L5.51868 18.3612V20.9058Z"
                fill="var(--p-primary-color)"
              /><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.578 0.888672H7.7177L6.36505 4.11174L8.56311 10.5579H11.4375L13.4665 4.11174L12.1138 0.888672H10.2543V10.5578H9.578V0.888672Z"
                fill="var(--p-primary-color)"
              /><path
                d="M8.56283 10.5575L1.29232 7.84329L0.277832 3.60242L6.53385 4.11132L8.73191 10.5575H8.56283Z"
                fill="var(--p-primary-color)"
              /><path
                d="M11.4372 10.5575L18.7077 7.84329L19.7222 3.60242L13.2971 4.11132L11.2681 10.5575H11.4372Z"
                fill="var(--p-primary-color)"
              /><path
                d="M13.8041 3.60283L17.3548 3.26356L14.9876 0.888672H12.6205L13.8041 3.60283Z"
                fill="var(--p-primary-color)"
              /><path
                d="M6.02676 3.60283L2.47604 3.26356L4.84318 0.888672H7.21033L6.02676 3.60283Z"
                fill="var(--p-primary-color)"
              /></svg>
            </div><div class="text-surface-950 dark:text-surface-0 text-3xl font-medium hidden">
              Prime
            </div>
          </div><div class="mt-10 flex flex-col gap-2">
            <div
              class="w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-primary-800 px-4 py-1 py-4 text-base text-primary-50 transition-all hover:bg-primary-900"
              data-pd-tooltip="true"
            >
              <i class="pi pi-home" /><span class="hidden">・</span><span class="hidden">Overview</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-comment" /><span class="hidden">・</span><span class="hidden">Chat</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-inbox" /><span class="hidden">・</span><span class="hidden">Inbox</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-th-large" /><span class="hidden">・</span><span class="hidden">Cards</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-user" /><span class="hidden">・</span><span class="hidden">Customers</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-video" /><span class="hidden">・</span><span class="hidden">Movies</span>
            </div>
          </div>
        </div>
        <div class="w-12 flex flex-col items-center">
          <div class="mt-10 flex flex-col gap-2">
            <!----><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-flag" /><span class="hidden">・</span><span class="hidden">Support</span>
            </div><div
              class="text-muted-color hover:bg-emphasis w-12 flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg bg-transparent px-4 py-1 py-4 text-base transition-all"
              data-pd-tooltip="true"
            >
              <i class="pi pi-cog" /><span class="hidden">・</span><span class="hidden">Settings</span>
            </div>
          </div><div
            class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left"
            role="separator"
            aria-orientation="horizontal"
            data-pc-name="divider"
            data-pc-section="root"
            pc454=""
            style="justify-content: center;"
          >
          <!---->
          </div><div class="flex items-center justify-center">
            <div
              class="p-avatar p-component p-avatar-image p-avatar-circle p-avatar-lg shrink-0"
              data-pc-name="avatar"
              data-pc-section="root"
              pc455=""
            >
              <img
                src="https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png"
                data-pc-section="image"
              >
            </div><div>
              <div class="hidden">
                Robin Jonas
              </div><div class="hidden">
                hi@robin.xyz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :style="containerStyle"
      class="relative h-100vh"
    >
      <div
        :visible="visible"
        class="bg-light-200 dark:bg-slate-900"
        :style="sidebarInlineStyle"
        @hide="visible = false"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
