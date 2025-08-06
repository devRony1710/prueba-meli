import type { HtmlHTMLAttributes } from "react";

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
    maxLength?: number;
    errorMessage?: string;
}

export interface InputLogicInterface {
    isFocused: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string | number;
}
