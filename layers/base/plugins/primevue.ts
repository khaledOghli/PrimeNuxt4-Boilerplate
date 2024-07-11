import 'primeicons/primeicons.css';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    console.log('%cWelcome to PrimeNuxt Boilerplate', 'color: aquamarine; font-weight: bold;font-size: 18px;');
  });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component('Toast', Toast);
});
