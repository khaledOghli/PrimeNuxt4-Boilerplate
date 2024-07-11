<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as zod from 'zod';

const objectItems = ref([
  { id: 1, name: 'Front-End Developer' },
  { id: 2, name: 'Back-End Developer' },
]);
const passwordLength = 8;

function handleJobChange(event: Event) {
  console.log('Selected Job:', event);
}
const { errors, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    zod.object({
      email: zod
        .string()
        .min(1, { message: 'This is required' })
        .email({ message: 'Must be a valid email' }),
      password: zod
        .string()
        .min(passwordLength, { message: 'Password must be at least 8 characters' }),
      job: zod.string().nonempty('Please select a Job'),

    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-alert,no-magic-numbers
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <PrimeFieldset>
    <template #legend>
      <div class="flex items-center pl-2">
        <span class="font-bold">{{ $t('forms-validation') }}</span>
      </div>
    </template>
    <div>
      <form @submit="onSubmit">
        <VInputText
          id="email"
          validation-name="email"
          :invalid="!!errors.email"
          placeholder="Enter your Email"
          label="Email"
          helper="Enter your Email"
        />
        <VInputPassword
          id="password"
          validation-name="password"
          :invalid="!!errors.password"
          placeholder="Enter your Password"
          label="Password"
          helper="Enter your Password"
          input-class="w-full"
          toggle-mask
        >
          <template #header>
            <div class="mb-4 text-xs font-semibold">
              {{ $t('pick-a-password') }}
            </div>
          </template>
          <template #footer>
            <ul class="my-0 ml-2 pl-2 leading-normal">
              <li>{{ $t('at-least-one-lowercase') }}</li>
              <li>{{ $t('at-least-one-uppercase') }}</li>
              <li>{{ $t('at-least-one-numeric') }}</li>
              <li>{{ $t('minimum-8-characters') }}</li>
            </ul>
          </template>
        </VInputPassword>

        <VRadioButtonList
          items-wrapper-class="flex gap-4"
          :items="objectItems"
          value-key="name"
          validation-name="job"
          :invalid="!!errors.job"
          label="Choose your job"
          helper="Select one option"
          @change="handleJobChange"
        />

        <PrimeButton type="submit">
          {{ $t('submit') }}
        </PrimeButton>
      </form>
    </div>
  </PrimeFieldset>
</template>
