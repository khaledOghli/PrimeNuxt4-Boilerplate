<template>
  <header class="mb-5">
    <div class="layout-container">
      <nav class="flex flex-row justify-between pb-5 pt-10">
        <NuxtLink
          to="/"
          :aria-label="$t('home')"
          class="min-w-fit"
        >
          <img
            class="h-6 lg:ml-0 sm:ml-3 dark:hidden"
            src="/nuxt/full-logo-green-dark.svg"
            style="height: 24px; width: 99px"
          >
          <img
            class="h-6 hidden dark:block"
            src="/nuxt/full-logo-green-light.svg"
            style="height: 24px; width: 99px"
          >
        </NuxtLink>
      </nav>
    </div>
    <AppMenu />
  </header>
</template>
