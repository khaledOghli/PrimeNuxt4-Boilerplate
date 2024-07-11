interface Classes {
  wrapper?: string
  header?: string
  body?: string
  footer?: string
}

interface CardProps {
  title?: string
  body?: string
  classes?: Classes
  hideHeader?: boolean
  hideFooter?: boolean
  headerClass?: string
  bodyClass?: string
  footerClass?: string
}

export {
  CardProps,
  Classes,
};
