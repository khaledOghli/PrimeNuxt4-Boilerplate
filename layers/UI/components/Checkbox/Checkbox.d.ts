import type { CheckboxProps as PrimeCheckboxProps } from 'primevue/checkbox';

export interface IProps extends /* @vue-ignore */ PrimeCheckboxProps {
  validationName?: string
  checkedValue?: any
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
  isSingle?: boolean
}
