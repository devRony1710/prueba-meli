export type SelectorOptionType = {
    value: string;
    label: string;
}

export interface UseSelectorLogicInterface {
    isOpen: boolean;
    toggleDropdown: () => void;
}

export interface SelectorProps {
    options: SelectorOptionType[];
    onChange: (option: SelectorOptionType) => void;
    value: string;
}