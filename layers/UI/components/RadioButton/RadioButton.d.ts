import type { RadioButtonProps as PrimeRadioButtonProps } from 'primevue/radiobutton';

export interface IProps extends /* @vue-ignore */ PrimeRadioButtonProps {
  validationName?: string
  checkedValue?: any
  rules?: any
  wrapperClass?: string
  label?: string
  error?: string
  helper?: string
  isSingle?: boolean
}
