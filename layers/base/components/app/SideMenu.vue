<script setup lang="ts">
const visible = ref(false);
</script>

<template>
  <div class="z-999">
    <VSidebar
      :visible="visible"
      @hide="visible = false"
    >
      <div class="h-full flex flex-col">
        <div class="flex shrink-0 items-center justify-between px-6 pt-4">
          <span class="inline-flex items-center gap-2">
            <svg
              width="35"
              height="40"
              viewBox="0 0 35 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                fill="var(--p-primary-color)"
              />
              <path
                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                fill="var(--p-text-color)"
              />
            </svg>
            <span class="text-primary text-2xl font-semibold">Your Logo</span>
          </span>
          <span>
            <Button
              type="button"
              icon="pi pi-times"
              outlined
              rounded
              @click="closeCallback"
            />
          </span>
        </div>
        <div class="overflow-y-auto">
          <ul class="m-0 list-none p-4">
            <li>
              <div
                v-ripple
                v-styleclass="{
                  selector: '@next',
                  enterFromClass: 'hidden',
                  enterActiveClass: 'animate-slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'animate-slideup',
                }"
                class="text-surface-500 dark:text-surface-400 p-ripple flex cursor-pointer items-center justify-between p-4"
              >
                <span class="font-medium">FAVORITES</span>
                <i class="pi pi-chevron-down" />
              </div>
              <ul class="m-0 list-none overflow-hidden p-0">
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-home mr-2" />
                    <span class="font-medium">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-bookmark mr-2" />
                    <span class="font-medium">Bookmarks</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    v-styleclass="{
                      selector: '@next',
                      enterFromClass: 'hidden',
                      enterActiveClass: 'animate-slidedown',
                      leaveToClass: 'hidden',
                      leaveActiveClass: 'animate-slideup',
                    }"
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-chart-line mr-2" />
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto" />
                  </a>
                  <ul class="m-0 list-none overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out hidden">
                    <li>
                      <a
                        v-ripple
                        v-styleclass="{
                          selector: '@next',
                          enterFromClass: 'hidden',
                          enterActiveClass: 'animate-slidedown',
                          leaveToClass: 'hidden',
                          leaveActiveClass: 'animate-slideup',
                        }"
                        class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                      >
                        <i class="pi pi-chart-line mr-2" />
                        <span class="font-medium">Revenue</span>
                        <i class="pi pi-chevron-down ml-auto" />
                      </a>
                      <ul class="m-0 list-none overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out hidden">
                        <li>
                          <a
                            v-ripple
                            class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                          >
                            <i class="pi pi-table mr-2" />
                            <span class="font-medium">View</span>
                          </a>
                        </li>
                        <li>
                          <a
                            v-ripple
                            class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                          >
                            <i class="pi pi-search mr-2" />
                            <span class="font-medium">Search</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        v-ripple
                        class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                      >
                        <i class="pi pi-chart-line mr-2" />
                        <span class="font-medium">Expenses</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-users mr-2" />
                    <span class="font-medium">Team</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-comments mr-2" />
                    <span class="font-medium">Messages</span>
                    <span
                      class="bg-primary text-primary-contrast ml-auto inline-flex items-center justify-center rounded-full"
                      style="min-width: 1.5rem; height: 1.5rem"
                    >3</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-calendar mr-2" />
                    <span class="font-medium">Calendar</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-cog mr-2" />
                    <span class="font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="m-0 list-none p-4">
            <li>
              <div
                v-ripple
                v-styleclass="{
                  selector: '@next',
                  enterFromClass: 'hidden',
                  enterActiveClass: 'animate-slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'animate-slideup',
                }"
                class="text-surface-500 dark:text-surface-400 p-ripple flex cursor-pointer items-center justify-between p-4"
              >
                <span class="font-medium">APPLICATION</span>
                <i class="pi pi-chevron-down" />
              </div>
              <ul class="m-0 list-none overflow-hidden p-0">
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-folder mr-2" />
                    <span class="font-medium">Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-chart-bar mr-2" />
                    <span class="font-medium">Performance</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple flex cursor-pointer items-center rounded p-4 transition-colors duration-150"
                  >
                    <i class="pi pi-cog mr-2" />
                    <span class="font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <hr class="border-surface-200 dark:border-surface-700 mx-4 mb-4 border-0 border-t">
          <a
            v-ripple
            class="text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 p-ripple m-4 flex cursor-pointer items-center gap-2 rounded p-4 transition-colors duration-150"
          >
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span class="font-bold">Amy Elsner</span>
          </a>
        </div>
      </div>
    </VSidebar>
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
