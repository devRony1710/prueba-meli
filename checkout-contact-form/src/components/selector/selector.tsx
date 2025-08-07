import styles from './selector-styles.module.css';
import { useSelectorLogic } from './use-selector-logic';
import type { SelectorProps } from './selector.types';
import { useTranslation } from 'react-i18next';

export const Selector = ({ options, onChange, value, defaultValue }: SelectorProps) => {
  const { isOpen, toggleDropdown } = useSelectorLogic();
  const { t } = useTranslation();

  return (
    <div className={styles['selector-container']}>
      <span className={styles['selector-span']}>{t('countryLabel')}</span>
      <button
        type="button"
        onClick={toggleDropdown}
        className={styles['selector-button']}
      >
        <p>{value || defaultValue?.label || t('selectAnOption')}</p>
      </button>

      <div
        className={`${styles['selector-options-container']} ${isOpen ? styles['selector-options-container-open'] : styles['selector-options-container-close']}`}
      >
        {options.map((option) => (
          <button
            className={styles['selector-option-button']}
            type="button"
            key={option.value}
            onClick={() => {
              onChange(option)
              toggleDropdown()
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
