<script setup lang="ts">
import { LazyFormFields, LazyInputFields } from '#components';
import { translate } from '@base/i18n.config';

const i18n = useI18n();
const swal = useSwal();
const toaster = useToaster();
useHead({
  title: i18n.t('Home'),
});

const currentComponent: any = shallowRef(LazyInputFields);
const items = ref([
  { label: 'Use Fields', icon: 'pi pi-home', command: () => (currentComponent.value = LazyInputFields) },
  { label: 'Use Form', icon: 'pi pi-chart-line', command: () => (currentComponent.value = LazyFormFields) },
]);
const activeTab = ref(0);

function showAlert() {
  const options: SwalOptions = {
    icon: 'error',
    title: 'Hello World!',
    text: 'This is a simple alert!',
    timer: 0,
    timerProgressBar: true,
    position: 'center',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  };

  const confirmCallback = () => {
    console.log('Confirmed!');
  };

  const dismissedCallback = () => {
    console.log('Dismissed!');
  };

  const deniedCallback = () => {
    console.log('Denied!');
  };

  swal.add(options, confirmCallback, dismissedCallback, deniedCallback);
}
function showToast() {
  const taostOptions: ToastOptions = {
    severity: 'error',
    summary: 'xxxxxx',
    detail: 'ccccc',
    life: 0,
    position: 'bottom-left',
  };
  toaster.add(taostOptions);
}
function showToast2() {
  const toastOptions: ToastOptions = {
    severity: 'success',
    summary: 'Hello World!',
    detail: 'This is a simple toast!',
    life: 0,
  };

  toaster.add(toastOptions);
}

onMounted(() => {
  translate('Home');
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center justify-between">
      <PrimeButton
        label="Hi Swal"
        @click="showAlert"
      />
      <PrimeButton
        label="Hi Toast"
        @click="showToast"
      />
      <PrimeButton
        label="Hi Toast 2"
        @click="showToast2"
      />
    </div>
    <VTabMenu
      v-model:activeIndex="activeTab"
      :model="items"
    />
    <KeepAlive>
      <CommonTransition>
        <component :is="currentComponent " />
      </CommonTransition>
    </KeepAlive>
  </div>
</template>
