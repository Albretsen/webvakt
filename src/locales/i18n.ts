import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import nb_NO from './nb_NO/translation.json';
import { convertLanguageJsonToObject } from './translations';

const translationsJson = {
  en: {
    translation: en, // Your existing English translations
  },
  nb_NO: {
    translation: nb_NO, // Your Norwegian Bokmål translations
  },
};

// Assuming convertLanguageJsonToObject is synchronous
convertLanguageJsonToObject(en);

// Directly use the init method's synchronous capabilities
i18next
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .use(LanguageDetector) // Optional: detect user language
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    // Important: Set initImmediate to false for synchronous loading
    initImmediate: false,
  });

export function switchLanguage() {
  console.log('test', i18next.language);
  const currentLang = i18next.language;
  const newLang = currentLang === 'en' ? 'nb_NO' : 'en';
  i18next.changeLanguage(newLang, (err, t) => {
    if (err)
      return console.log(
        'Something went wrong during the language switch',
        err,
      );
    console.log(`Language switched to ${newLang}`);
  });
}

// Since we're loading synchronously, we can directly export i18next
export const i18n = i18next;
