import 'primeicons/primeicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    console.log('%cWelcome to PrimeNuxt Boilerplate', 'color: aquamarine; font-weight: bold;font-size: 18px;');
  });
});
