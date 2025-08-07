import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { UseLanguageButtonLogicInterface } from './language-button.types';

export const useLanguageButtonLogic = (): UseLanguageButtonLogicInterface => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es');
  const [isOpenLanguageOptions, setIsOpenLanguageOptions] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsOpenLanguageOptions(false);
  };

  return {
    language,
    isOpenLanguageOptions,
    handleLanguageChange,
    setIsOpenLanguageOptions,
  };
};
