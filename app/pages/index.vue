<script setup lang="ts">
const classes = {
  wrapper: 'card-bg overflow-hidden rounded-lg dark:bg-slate-600 dark:shadow-slate-700 border border-slate-200 dark:border-slate-800',
  header: 'flex justify-center items-center p-4 bg-slate-100 rounded-lg m-2 dark:bg-slate-700 dark:text-slate-100 border-1 border-slate-200 dark:border-slate-700',
  body: 'flex justify-center items-center',
  footer: '',
};
definePageMeta({
  layout: 'default',
});
const date = useLocaleDate(new Date());
const dateOnlyTime = useLocaleOnlyTime(new Date());
const dateWithTime = useLocaleDateWithTime(new Date());
</script>

<template>
  <VCard :classes="classes">
    <template #header>
      <NuxtLink
        to="/"
        :aria-label="$t('home')"
        class="min-w-fit flex items-center"
      >
        <img
          class="h-8 lg:ml-0 sm:ml-3 dark:hidden"
          src="/nuxt/full-logo-green-dark.svg"
        >
        <img
          class="h-8 hidden dark:block"
          src="/nuxt/full-logo-green-light.svg"
        >
      </NuxtLink>
    </template>
    <template #title>
      <h1 class="flex flex-wrap items-center justify-center text-xl font-bold lg:text-5xl md:text-4xl sm:text-2xl">
        {{ $t('welcome-to') }}
        <span class="gradient-title mx-1 flex">
          <bdi>
            {{ $t('nuxt-primeVue!') }}
          </bdi>
        </span>
      </h1>
    </template>
    <template #content>
      <div class="flex flex-col">
        <p
          v-t="{ path: 'demo-page' }"
          class="text-lg"
        />
      </div>
    </template>
    <template #footer>
      <ClientOnly>
        <div class="flex items-center justify-between">
          <p>{{ date }}</p>
          <p>{{ dateOnlyTime }}</p>
          <p>{{ dateWithTime }} </p>
        </div>
      </ClientOnly>
    </template>
  </VCard>
</template>
