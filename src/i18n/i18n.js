import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import KG from './locales/kg.json';
import RU from './locales/ru.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {

      kg: {
        translation: KG
      },
      ru: {
        translation: RU
      }
    },
    lng:"ru",
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;