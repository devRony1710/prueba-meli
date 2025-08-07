// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationES from "./locales/es/es.json";
import translationEN from "./locales/en/en.json";

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(LanguageDetector) // detecta el idioma del navegador
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: "en", // idioma por defecto si no detecta ninguno
    interpolation: {
      escapeValue: false, // React ya hace escape
    },
  });

export default i18n;
