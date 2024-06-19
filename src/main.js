import { createApp } from 'vue';
import App from './App.vue';
import '../css/global.css';
import setupI18n, { setI18nLanguage } from './i18n';

const defaultLocale = 'en';

const i18n = setupI18n(defaultLocale);

setI18nLanguage(defaultLocale);

createApp(App)
  .use(i18n)
  .mount('#app');