import type { PasswordProps } from 'primevue/password';

export interface IProps extends /* @vue-ignore */ PasswordProps {
  validationName?: string
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
}
