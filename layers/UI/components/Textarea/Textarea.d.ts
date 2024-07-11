import type { TextareaProps } from 'primevue/textarea';

export interface IProps extends /* @vue-ignore */ TextareaProps {
  validationName?: string
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
}
