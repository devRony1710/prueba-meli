import styles from './language-button-styles.module.css';
import { useLanguageButtonLogic } from './use-language-button-logic';

const languages = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
];

export const LanguageButton = () => {
  const {
    language,
    isOpenLanguageOptions,
    handleLanguageChange,
    setIsOpenLanguageOptions,
  } = useLanguageButtonLogic();

  return (
    <div className={styles['language-button-container']}>
      <button
        className={styles['language-button']}
        onClick={() => setIsOpenLanguageOptions(!isOpenLanguageOptions)}
      >
        {language.toUpperCase()}
      </button>
      {isOpenLanguageOptions && (
        <div className={styles['language-button-options-container']}>
          {languages.map((language) => (
            <button
              key={language.value}
              onClick={() => handleLanguageChange(language.value)}
              className={styles['language-button-option']}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
