import type { ToastMessageOptions, ToastProps } from 'primevue/toast';
import type { ToastServiceMethods } from 'primevue/toastservice';
import { useToast } from 'primevue/usetoast';

declare global {
  type ToastOptions = ToastProps & {
    allowedMultiple?: boolean
    severity?: ToastMessageOptions['severity']
    group?: string
    detail?: string
    summary?: string
    life?: number
  };
}

export enum ToastPosition {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
  Center = 'center',
}

const defaultToastOptions: ToastOptions = {
  severity: 'error',
  summary: 'Oops...',
  detail: 'Something went wrong! Try again',
  life: 4000,
  allowedMultiple: false,
  position: 'top-right',
};

export function useToaster() {
  const toast = useToast() as ToastServiceMethods;
  return {
    add: (options: ToastOptions) => {
      if (options && options.allowedMultiple) {
        toast.add({ ...defaultToastOptions, ...options });
      }
      else {
        toast.removeAllGroups();
        toast.add({ ...defaultToastOptions, ...options });
      }
    },
    remove: (options: ToastOptions) => {
      toast.remove(options);
    },
    removeGroup: (group: string) => {
      toast.removeGroup(group);
    },
    removeAllGroups: () => {
      toast.removeAllGroups();
    },
  };
}
