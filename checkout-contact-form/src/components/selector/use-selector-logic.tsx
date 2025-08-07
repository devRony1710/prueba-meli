import { useState } from 'react';
import type { UseSelectorLogicInterface } from './selector.types';

export const useSelectorLogic = (): UseSelectorLogicInterface => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleDropdown,
  };
};
