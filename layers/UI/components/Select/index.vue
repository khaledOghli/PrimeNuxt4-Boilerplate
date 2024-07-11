<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';
import type { IProps } from './Select.d';

const props = withDefaults(defineProps<IProps>(), {
  validationName: '',
  rules: null,
  wrapperClass: '',
  label: '',
  error: '',
  helper: '',
});

defineOptions({
  inheritAttrs: true,
});

const showLabel = ref(!!props.label);
const dropdownRef = ref(null);
const { value, errorMessage } = useField(() => props.validationName, props.rules, {
  syncVModel: true,
});
const model = defineModel();
const modelComputed = computed({
  get: () => (props.validationName ? value.value : model.value),
  set: (val) => {
    if (props.validationName) {
      value.value = val;
    }
    else {
      model.value = val;
    }
  },
});
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label v-if="showLabel">{{ label }}</label>
    <PrimeSelect
      v-bind="$attrs"
      ref="dropdownRef"
      v-model="modelComputed"
      :class="{ 'p-invalid': $attrs.invalid }"
    />
    <slot name="helper">
      <small
        v-if="props.helper"
        id="dropdown-help"
      >{{ props.helper }}</small>
    </slot>
    <CommonTransition>
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
