import type { CheckboxProps as PrimeCheckboxProps } from 'primevue/checkbox';

export interface IProps extends /* @vue-ignore */ PrimeCheckboxProps {
  items: Array
  valueKey?: string
  idKey?: string
  validationName?: string
  rules?: any
  wrapperClass?: string
  itemsWrapperClass?: string
  label?: string
  error?: string
  helper?: string
  modelValue?: any
}
