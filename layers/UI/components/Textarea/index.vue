<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';
import { generateID } from '@base/utils/generateID';
import type { IProps } from './Textarea.d';

const props = withDefaults(defineProps<IProps>(), {
  validationName: '',
  rules: null,
  wrapperClass: '',
  label: '',
  error: '',
  helper: '',
});

defineOptions({
  inheritAttrs: false,
});
const attrs = useAttrs();
const inputRef = ref(null);
const showLabel = ref(!!props.label);
const model = defineModel();
const { value, errorMessage } = useField(() => props.validationName, props.rules, {
  syncVModel: true,
});
const modelComputed = computed({
  get: () => (props.validationName ? value.value : model.value),
  set: (val) => {
    if (props.validationName)
      value.value = val;
    else
      model.value = val;
  },
});
const idComputed = computed(() => `textarea-${generateID(attrs.id)}`);
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <span v-if="showLabel">
      <label :for="idComputed">{{ label }}</label>
    </span>
    <PrimeTextarea
      v-bind="$attrs"
      :id="idComputed"
      ref="inputRef"
      v-model="modelComputed"
      :class="{ 'p-invalid': $attrs.invalid }"
    />

    <slot name="helper">
      <small
        v-if="props.helper"
        id="textarea-help"
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
