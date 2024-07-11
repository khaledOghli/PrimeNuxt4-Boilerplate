<script lang="ts" setup>
import { useAuthStore } from '@base/stores/auth';
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import * as zod from 'zod';

useHead({
  title: 'Login',
});

definePageMeta({
  layout: 'auth',
});
const passwordLength = 8;
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    zod.object({
      email: zod
        .string()
        .min(1, { message: 'This is required' })
        .email({ message: 'Must be a valid email' }),
      password: zod
        .string()
        .min(passwordLength, { message: 'Password must be at least 8 characters' }),
    }),
  ),
});

const auth = useAuthStore();
const router = useRouter();
const error = ref();
const route = useRoute();

const { store } = useAuthStorage();

const { value: email } = useField('email', undefined, {
  initialValue: '',
});
const { value: password } = useField('password', undefined, {
  initialValue: '',
});

const onSubmit = handleSubmit(async (values) => {
  error.value = '';
  try {
    const res = await $fetch('/api/auth/login', {
      method: 'post',
      body: values,
    });

    const token = res.token;
    const user = res.user;

    store(token, user);

    auth.user = user;
    auth.loggedIn = true;

    router.push(route.query.next || '/');
  }
  catch (e: any) {
    error.value = e.data.error;
  }
});
</script>

<template>
  <div class="h-full min-h-screen flex items-center justify-center bg-gray-50">
    <form
      class="mx-auto max-w-md w-full rounded-lg px-10 py-8 space-y-6"
      @submit.prevent="onSubmit"
    >
      <!-- <AuthHeader title="Login" subtitle="Please enter your credentials" /> -->

      <div
        v-if="error"
        class="bg-error-600 mb-4 rounded-lg px-4 py-3 text-sm text-white"
      >
        {{ error }}
      </div>

      <VInputText
        v-model="email"
        wrapper-class="mb-2 flex flex-col"
        name="email"
        label="Email"
        placeholder="Email"
        hint="Email: admin@example.com"
      />
      <VInputText
        v-model="password"
        wrapper-class="mb-2 flex flex-col"
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        hint="Password: admin"
      />

      <div class="mb-5 flex items-center justify-between gap-2">
        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            class="h-4 w-4 rounded text-primary-500 transition duration-300 focus:ring-primary-500"
          >
          {{ $t('login.remember-me') }}
        </label>
        <NuxtLink
          to="/auth/forgot-password"
          class="text-sm text-primary-500 font-semibold hover:underline"
        >
          {{ $t('login.forgot-password') }}
        </NuxtLink>
      </div>

      <VButton
        type="submit"
        color="primary"
        block
        class="mb-5 w-full"
      >
        {{ $t('login.login') }}
      </VButton>

      <div class="mt-4 flex items-center justify-center">
        <div class="w-full border-t border-gray-300" />
        <div class="px-3 text-gray-600">
          {{ $t('login.or-continue-with') }}
        </div>
        <div class="w-full border-t border-gray-300" />
      </div>
      <div class="mt-4 flex space-x-4">
        <button
          type="button"
          class="group relative w-full flex justify-center border border-gray-300 rounded-md bg-white px-4 py-2 text-sm text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Icon
            name="logos:google-icon"
            class="h-5 w-5"
          />
          {{ $t('login.google') }}
        </button>
        <button
          type="button"
          class="group relative w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md bg-white px-4 py-2 text-sm text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Icon
            name="mdi:github"
            class="h-5 w-5"
          />
          {{ $t('login.github') }}
        </button>
      </div>

      <div class="mt-4 text-center text-sm text-gray-600">
        {{ $t('login.do-not-have-account') }}
        <NuxtLink
          to="/auth/register"
          class="text-sm text-primary-500 font-semibold hover:underline"
        >
          {{ $t('login.register') }}
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
