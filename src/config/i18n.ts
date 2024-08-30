import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      upcomingLaunch: "Upcoming Launch",
      subscribe: "Subscribe",
      subscriptionInfo: "Sign up to be the first to know about our launch events.",
      email: "Email",
      register: "Register",
      subscribeResponse: {
        success: {
          title: "Subscription successful!",
          message: "Thank you for subscribing. We will keep you informed about our upcoming launches via email.",
        },
        failure: {
          title: "Sorry, something went wrong.",
          message: {
            duplicate: "The email is already subscribed.",
            timeout: "The request has timed out. Please try again.",
            unknown: "Subscription failed. Please try again.",
          },
        },
      },
      serviceUnavailable: "It seems that the service is unavailable at this time. Please try again later.",
      allRightsReserved: "All rights reserved.",
    },
  },
  es: {
    translation: {
      upcomingLaunch: "Próximo lanzamiento",
      subscribe: "Suscribirse",
      subscriptionInfo: "Inscríbete para ser el primero en saber acerca de nuestros eventos de lanzamiento.",
      email: "Correo electrónico",
      register: "Regístrate",
      subscribeResponse: {
        success: {
          title: "¡Suscripción exitosa!",
          message: "Gracias por suscribirte. Te mantendremos informado sobre nuestros próximos lanzamientos a través de tu correo electrónico.",
        },
        failure: {
          title: "Lo sentimos, algo salió mal.",
          message: {
            duplicate: "El correo electrónico ya está suscrito.",
            timeout: "La solicitud ha caducado. Por favor, inténtalo de nuevo.",
            unknown: "La suscripción falló. Por favor, inténtalo de nuevo.",
          },
        },
      },
      serviceUnavailable: "Parece que el servicio no está disponible en este momento. Por favor, inténtalo de nuevo más tarde.",
      allRightsReserved: "Todos los derechos reservados.",
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