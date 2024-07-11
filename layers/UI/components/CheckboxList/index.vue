<script setup lang="ts">
import { useField } from 'vee-validate';
import { ref, useAttrs } from 'vue';
import type { IProps } from './CheckboxList.d';

const props = withDefaults(defineProps<IProps>(), {
  validationName: '',
  checkedValue: null,
  rules: null,
  wrapperClass: '',
  itemsWrapperClass: '',
  label: '',
  error: '',
  helper: '',
  isSingle: true,
  items: [],
  valueKey: 'value',
  idKey: null,
});

defineOptions({
  inheritAttrs: true,
});
const attrs = useAttrs();
const showLabel = ref(!!props.label);

const { errorMessage, value } = useField(() => props.validationName, props.rules, {
  type: 'checkbox',
  checkedValue: attrs.binary ? true : props.checkedValue,
  uncheckedValue: attrs.binary ? false : null,
});
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label
      v-if="showLabel"
      class="!cursor-auto"
    >{{ label }}</label>
    <div :class="props.itemsWrapperClass ? props.itemsWrapperClass : 'dm-field'">
      <div
        v-for="(item, index) in props.items"
        :key="item[props.idKey] || item.id || index"
        class="dm-field-item"
      >
        <VCheckbox
          :input-id="`checkbox-${item[props.idKey] || item.id || index}`"
          :validation-name="props.validationName"
          :value="typeof item === 'object' ? item[props.valueKey] : item"
          :invalid="!!$attrs.invalid"
          :checked-value="typeof item === 'object' ? item[props.valueKey] : item"
          :checked="value === (typeof item === 'object' ? item[props.valueKey] : item)"
          :is-single="false"
        />
        <label :for="`checkbox-${item[props.idKey] || item.id || index}`">{{ typeof item === 'object' ? item[props.valueKey] : item }}</label>
      </div>
    </div>
    <slot name="helper">
      <small
        v-if="props.helper"
        id="radio-list-help"
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
.dm-field-item {
  @apply flex items-center;
}
</style>
