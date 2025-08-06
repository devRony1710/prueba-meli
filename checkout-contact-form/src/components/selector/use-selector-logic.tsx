import { useState } from 'react';
import type {
  SelectorOptionType,
  UseSelectorLogicInterface,
} from './selector.types';

export const useSelectorLogic = (): UseSelectorLogicInterface => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<SelectorOptionType | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: SelectorOptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedOption,
    toggleDropdown,
    handleSelectOption,
  };
};
