import type { TabMenuProps } from 'primevue/tabmenu';

export interface IProps extends TabMenuProps {
  [key: string]: any // For inheriting additional attributes
}
