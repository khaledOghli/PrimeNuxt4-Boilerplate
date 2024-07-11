import type { InputTextProps } from 'primevue/inputtext';

export interface IProps extends /* @vue-ignore */ InputTextProps {
  validationName?: string
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
}
