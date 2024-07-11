// define types for items in the menu bar
export interface MenuItem {
  label?: string
  icon?: string
  action?: () => void
  items?: MenuItem[]
  shortcut?: string
  badge?: string | number
  separator?: boolean
}
