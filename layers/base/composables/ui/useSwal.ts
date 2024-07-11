import type { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import Swal from 'sweetalert2';

const defaultTime = 500;
declare global {
  type SwalOptions = SweetAlertOptions;
}
// Define default options for SweetAlert
const defaultSwalOptions: SwalOptions = {
  position: 'center',
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong! Try again',
  showConfirmButton: true,
  showCancelButton: true,
  showDenyButton: true,
  allowOutsideClick: false,
  allowEscapeKey: false,
  showLoaderOnConfirm: true,
  showCloseButton: true,
  buttonsStyling: true,
  confirmButtonColor: 'var(--swal-confirm-btn-color)',
  cancelButtonColor: 'var(--swal-cancel-btn-color)',
  denyButtonColor: 'var(--swal-deny-btn-color)',
  background: 'var(--swal-bg)',
  color: 'var(--swal-text-color)',
  // customClass: {
  //   confirmButton: 'btn-primary',
  //   denyButton: 'btn-light',
  //   cancelButton: 'btn-light',
  // },
  confirmButtonText: 'OK',
};

// Define callback types for SweetAlert actions
type ConfirmCallback = () => void;
type DismissedCallback = () => void;
type DeniedCallback = () => void;

/**
 * A utility function to display a SweetAlert modal.
 * @param options - The options for configuring the SweetAlert modal.
 * @param confirmCallback - Callback function to execute when the modal is confirmed.
 * @param dismissedCallback - Callback function to execute when the modal is dismissed.
 * @param deniedCallback - Callback function to execute when the modal is denied.
 */
function useSweetAlert(options: SwalOptions, confirmCallback?: ConfirmCallback, dismissedCallback?: DismissedCallback, deniedCallback?: DeniedCallback) {
  // Define a preConfirm function that resolves after a short delay
  const preConfirm = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, defaultTime);
    });
  };

  // Merge default options with provided options and display the SweetAlert modal
  Swal.fire(Object.assign({}, defaultSwalOptions, options, { preConfirm })).then(
    (result: SweetAlertResult) => {
      // Execute appropriate callback based on modal result
      if (result.isConfirmed && confirmCallback)
        confirmCallback();
      else if (result.isDismissed && dismissedCallback)
        dismissedCallback();
      else if (result.isDenied && deniedCallback)
        deniedCallback();
    },
  );
}

export function useSwal() {
  return {
    add: (options: SwalOptions, confirmCallback?: ConfirmCallback, dismissedCallback?: DismissedCallback, deniedCallback?: DeniedCallback) => {
      console.log('add', options);
      useSweetAlert(options as SwalOptions, confirmCallback, dismissedCallback, deniedCallback);
    },
  };
}

declare global {
  interface Window {
    useSwal: ReturnType<typeof useSwal>
  }
}
