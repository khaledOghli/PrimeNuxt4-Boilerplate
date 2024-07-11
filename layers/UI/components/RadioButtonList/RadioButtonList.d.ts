import type { RadioButtonProps as PrimeRadioButtonProps } from 'primevue/radiobutton';

export interface IProps extends /* @vue-ignore */ PrimeRadioButtonProps {
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
