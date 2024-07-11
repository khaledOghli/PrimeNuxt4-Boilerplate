<template>
  <header class="mb-5">
    <div class="layout-container">
      <nav class="flex flex-row justify-between pb-5 pt-10">
        <NuxtLink
          to="/"
          :aria-label="$t('home')"
          class="min-w-fit"
        >
          <NuxtImg
            class="h-6 lg:ml-0 sm:ml-3 dark:hidden"
            src="/nuxt/full-logo-green-dark.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px"
          />
          <NuxtImg
            class="h-6 hidden dark:block"
            src="/nuxt/full-logo-green-light.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px"
          />
        </NuxtLink>
      </nav>
    </div>
    <AppSubHeader />
  </header>
</template>
