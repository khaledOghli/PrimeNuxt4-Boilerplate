import type { InputNumberProps as PrimeInputNumberProps } from 'primevue/inputnumber';

export interface IProps extends /* @vue-ignore */ PrimeInputNumberProps {
  validationName?: string
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
}
