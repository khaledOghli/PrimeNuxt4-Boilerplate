<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref, useAttrs } from 'vue';
import type { IProps } from './Checkbox.d';

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
const checkboxRef = ref(null);

const { checked, handleChange, errorMessage } = useField(() => props.validationName, props.rules, {
  type: 'checkbox',
  checkedValue: attrs.binary && !attrs.trueValue ? true : props.checkedValue,
  uncheckedValue: attrs.binary && !attrs.falseValue ? false : null,
});

const model = defineModel();

const modelComputed = computed({
  get: () => (model.value),
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
    <span v-if="showLabel">
      <label :for="$attrs.id">{{ props.label }}</label>
    </span>
    <PrimeCheckbox
      v-bind="$attrs"
      ref="checkboxRef"
      v-model="modelComputed"
      :checked="checked"
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
        id="checkbox-help"
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
