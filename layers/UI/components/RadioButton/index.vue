<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref, useAttrs } from 'vue';
import type { IProps } from './RadioButton.d';

const props = withDefaults(defineProps<IProps>(), {
  validationName: '',
  checkedValue: null,
  rules: null,
  wrapperClass: '',
  label: '',
  error: '',
  helper: '',
  isSingle: true,
});

const emits = defineEmits<{
  change: (event: Event) => void
  [key: string]: any
}>();

defineOptions({
  inheritAttrs: true,
});
const attrs = useAttrs();
const showLabel = ref(!!props.label);
const radioRef = ref(null);

const { checked, handleChange, errorMessage, value } = useField(() => props.validationName, props.rules, {
  type: 'radio',
  checkedValue: attrs.binary ? true : props.checkedValue,
  uncheckedValue: attrs.binary ? false : null,
});

const model = defineModel();

const modelComputed = computed({
  get: () => (value.value),
  set: (val) => {
    model.value = val;
  },
});

function handleOnChange(event: Event) {
  if (props.validationName) {
    handleChange(event);
  }
  emits('change', event);
}
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label
      v-if="showLabel"
      :for="$attrs.id"
    >{{ label }}</label>
    <PrimeRadioButton
      v-bind="$attrs"
      ref="radioRef"
      v-model="modelComputed"
      :checked="checked"
      :name="props.validationName"
      :value="props.checkedValue"
      :class="{ 'p-invalid': $attrs.invalid }"
      @change="handleOnChange"
    />
    <slot
      v-if="props.isSingle"
      name="helper"
    >
      <small
        v-if="props.helper"
        id="radio-help"
      >{{ props.helper }}</small>
    </slot>
    <CommonTransition v-if="props.isSingle">
      <small
        v-if="$attrs.invalid"
        class="p-error flex items-center gap-1 text-sm"
      >
        <Icon name="material-symbols:error-outline-rounded" />
        {{ props.error ? props.error : errorMessage }}
      </small>
    </CommonTransition>
  </div>
</template>

<style scoped>
.dm-field {
  @apply relative flex flex-col;
}
</style>
