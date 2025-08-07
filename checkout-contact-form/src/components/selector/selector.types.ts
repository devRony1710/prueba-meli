export type SelectorOptionType = {
    value: string;
    label: string;
}

export interface UseSelectorLogicInterface {
    isOpen: boolean;
    selectedOption: SelectorOptionType | null;
    toggleDropdown: () => void;
    handleSelectOption: (option: SelectorOptionType) => void;
    options: SelectorOptionType[];
}