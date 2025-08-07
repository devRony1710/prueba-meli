import styles from './selector-styles.module.css';
import { useSelectorLogic } from './use-selector-logic';
import type { SelectorProps } from './selector.types';

export const Selector = ({ options, onChange, value }: SelectorProps) => {
  const { isOpen, toggleDropdown } = useSelectorLogic();

  return (
    <div className={styles['selector-container']}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={styles['selector-button']}
      >
        <p>{value || 'Seleccione una opción'}</p>
      </button>

      <div
        className={`${styles['selector-options-container']} ${isOpen ? styles['selector-options-container-open'] : styles['selector-options-container-close']}`}
      >
        {options.map((option) => (
          <button
            className={styles['selector-option-button']}
            type="button"
            key={option.value}
            onClick={() => onChange(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
