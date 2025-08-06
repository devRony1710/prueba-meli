import styles from './selector-styles.module.css';
import { useSelectorLogic } from './use-selector-logic';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Selector = () => {
  const { isOpen, selectedOption, toggleDropdown, handleSelectOption } =
    useSelectorLogic();

  return (
    <div className={styles['selector-container']}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={styles['selector-button']}
      >
        <p>{selectedOption?.label || 'Seleccione una opción'}</p>
      </button>

      <div
        className={`${styles['selector-options-container']} ${isOpen ? styles['selector-options-container-open'] : styles['selector-options-container-close']}`}
      >
        {options.map((option) => (
          <button
            className={styles['selector-option-button']}
            type="button"
            key={option.value}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
