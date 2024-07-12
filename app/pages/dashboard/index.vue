<script lang="ts" setup>
// import { useSignin } from '@/composables/auth/auth'
// import { useUser } from '@/composables/auth/user'

// const { clearUser } = useUser()

// const { signOut } = useSignin()

definePageMeta({
  layout: 'admin',
  // middleware: 'auth',
});
const classes = {
  wrapper: 'card-bg overflow-hidden rounded-lg dark:bg-slate-600 dark:shadow-slate-700 border border-slate-200 dark:border-slate-800',
  header: 'flex justify-center items-center p-4 bg-slate-100 rounded-lg m-2 dark:bg-slate-700 dark:text-slate-100 border-1 border-slate-200 dark:border-slate-700',
  body: 'flex justify-center items-center',
  footer: '',
};
const _stats = ref([
  {
    text: 'Users',
    count: '100',
    icon: 'ri:user-line',
    color: 'bg-indigo-500',
  },
  {
    text: 'Posts',
    count: '20',
    icon: 'ri:book-2-line',
    color: 'bg-blue-500',
  },
  {
    text: 'Comments',
    count: '500',
    icon: 'ri:message-line',
    color: 'bg-orange-500',
  },
  {
    text: 'Views',
    count: '12000',
    icon: 'ri:line-chart-line',
    color: 'bg-emerald-500',
  },
]);
</script>

<template>
  <div>
    <VCard :classes="classes">
      <template #header>
        <NuxtLink
          to="/"
          :aria-label="$t('home')"
          class="min-w-fit flex items-center"
        >
          <NuxtImg
            class="h-8 lg:ml-0 sm:ml-3 dark:hidden"
            src="nuxt/full-logo-green-dark.svg"
            densities="x1 x2"
            alt="nuxt-logo"
          />
          <NuxtImg
            class="h-8 hidden dark:block"
            src="nuxt/full-logo-green-light.svg"
            densities="x1 x2"
            alt="nuxt-logo"
          />
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
    </VCard>
  </div>
</template>
