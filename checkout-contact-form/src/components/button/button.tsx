import type { FC } from 'react';
import styles from './button-styles.module.css';
import type { ButtonProps } from './button.types';
import clsx from 'clsx';

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className={clsx(
        styles['button'],
        props.disabled && styles['button-disabled']
      )}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
