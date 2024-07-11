import type { SelectProps } from 'primevue/select';

export interface IProps extends /* @vue-ignore */ SelectProps {
  validationName?: string
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
}
