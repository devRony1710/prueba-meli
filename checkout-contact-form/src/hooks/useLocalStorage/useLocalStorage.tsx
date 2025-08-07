import type {
  UseLocalStorageInterface,
  UseLocalStorageInterfaceProps,
} from './useLocalStorage.types';
import { useState } from 'react';

export const useLocalStorage = ({
  key,
  initialValue,
}: UseLocalStorageInterfaceProps): UseLocalStorageInterface => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return { value, setLocalStorageValue };
};
