import { useState } from 'react';
import type { InputLogicInterface } from './input.types';

export const useInputLogic = (type: string): InputLogicInterface => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Prevent letters in phone input when type is text
    if (type === 'text' && name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setInputValue(numericValue);
      return;
    }

    setInputValue(e.target.value);
  };

  return {
    isFocused,
    handleFocus,
    handleBlur,
    handleOnChange,
    inputValue,
  };
};
