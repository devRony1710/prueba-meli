export interface InputProps {
    label: string;
    name: string;
    type: string;
}

export interface InputLogicInterface {
    isFocused: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string | number;
}
