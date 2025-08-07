import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { UseLanguageButtonLogicInterface } from './language-button.types';
import { useLocalStorage } from '@/hooks/useLocalStorage/useLocalStorage';

export const useLanguageButtonLogic = (): UseLanguageButtonLogicInterface => {
  const { i18n } = useTranslation();
  const { value, setLocalStorageValue } = useLocalStorage({ key: 'language', initialValue: 'es' });
  const [language, setLanguage] = useState(value);
  const [isOpenLanguageOptions, setIsOpenLanguageOptions] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLocalStorageValue(lang);
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
