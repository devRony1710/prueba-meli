import { type FC } from 'react';
import type { InputProps } from './input.types';
import styles from './input-styles.module.css';
import { useInputLogic } from './use-input-logic';

export const Input: FC<InputProps> = ({ label, name, type, maxLength, ...props }) => {
  const { isFocused, handleFocus, handleBlur, handleOnChange, inputValue } =
    useInputLogic(type);

  return (
    <div className={styles['input-container']}>
      <label
        className={`${styles['label']} ${inputValue || isFocused ? styles['focused'] : styles['not-focused']}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className={styles['input']}
        type={type}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleOnChange}
        value={inputValue}
        maxLength={maxLength}
        max={maxLength}
        {...props}
      />
    </div>
  );
};
