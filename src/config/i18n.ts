// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      jupiterLabs: "JUPITER LABS",
      upcomingLaunch: "Upcoming Launch",
      subscribe: "Subscribe",
      subscriptionInfo: "Sign up to be the first to know about our launch events.",
      email: "Email",
      register: "Register"
    },
  },
  es: {
    translation: {
      jupiterLabs: "JUPITER LABS",
      upcomingLaunch: "Próximo lanzamiento",
      subscribe: "Suscribirse",
      subscriptionInfo: "Inscríbete para ser el primero en saber acerca de nuestros eventos de lanzamiento.",
      email: "Correo electrónico",
      register: "Regístrate"
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;