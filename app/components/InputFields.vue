<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as zod from 'zod';

const objectItems = ref([
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' },
]);

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: 'This is required' })
      .email({ message: 'Must be a valid email' }),
    UAEMobile: zod
      .number()
      .refine(
        (value) => {
          const str = value.toString();
          const UAE_MOBILE_LENGTH = 12;
          const UAE_MOBILE_LENGTH_WITH_ZERO = 13;
          return (
            (str.length === UAE_MOBILE_LENGTH && str.startsWith('971'))
            || (str.length === UAE_MOBILE_LENGTH_WITH_ZERO && str.startsWith('9710'))
          );
        },
        { message: 'Must be a valid UAE mobile number' },
      ),
    dropdown: zod
      .number()
      .min(1, { message: 'This is required' }),
    checkbox: zod
      .boolean()
      .refine(
        value => value === true,
        { message: 'This is required' },
      ),
    textarea: zod.string().min(1, { message: 'This is required' }),
    fruits: zod.array(zod.string()).nonempty('Please select at least one fruit'),
  }),
);
const { handleSubmit, values, errors } = useForm({
  validationSchema,
});

function handleSelectedFruitsChange(newValues: any) {
  console.log('Selected fruits:', newValues);
}

const onSubmit = handleSubmit((values) => {
  const PRETTY_PRINT_INDENTATION = 2;
  console.log(JSON.stringify(values, null, PRETTY_PRINT_INDENTATION));
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <PrimeFieldset>
      <template #legend>
        <div class="flex items-center pl-2">
          <span class="font-bold">{{ $t('fields-validation') }}</span>
        </div>
      </template>
      <div>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:col-span-6">
            <VInputText
              id="email"
              validation-name="email"
              :invalid="!!errors.email"
              placeholder="Enter your email"
              label="Email"
              helper="Enter your email"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <VInputNumber
              id="UAEMobile"
              validation-name="UAEMobile"
              :invalid="!!errors.UAEMobile"
              placeholder="Enter your UAE Mobile"
              label="UAE Mobile"
              :use-grouping="false"
              helper="Enter your UAE Mobile starting with 971"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <VSelect
              id="dropdown"
              validation-name="dropdown"
              :invalid="!!errors.dropdown"
              placeholder="Select an option"
              label="Dropdown"
              helper="Enter your UAEMobile"
              :options="[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
              ]"
              option-label="label"
              option-value="value"
              option-disabled="disabled"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <VCheckboxList
              :id="objectItems"
              items-wrapper-class="flex gap-4 min-h-[40px]"
              :items="objectItems"
              value-key="name"
              validation-name="fruits"
              :invalid="!!errors.fruits"
              label="Choose your fruits"
              helper="Select one or more options"
              @change="handleSelectedFruitsChange"
            />
          </div>
          <div class="col-span-12">
            <VTextarea
              id="textarea2"
              validation-name="textarea"
              :invalid="!!errors.textarea"
              placeholder="Enter your textarea"
              label="textarea"
              helper="Enter your textarea"
            />
          </div>
        </div>
      </div>
    </PrimeFieldset>
    <PrimeButton
      type="submit"
      @click="onSubmit"
    >
      {{ $t('submit') }}
    </PrimeButton>
    <div class="flex flex-col">
      {{ $t('result') }}:
      <ul>
        <li>
          {{ $t('values') }}: {{ values }}
        </li>
        <li>
          {{ $t('errors') }}: {{ errors }}
        </li>
      </ul>
    </div>
  </div>
</template>
