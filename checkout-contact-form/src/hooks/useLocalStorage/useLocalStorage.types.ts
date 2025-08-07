export interface UseLocalStorageInterfaceProps {
    key: string;
    initialValue: string;
}

export interface UseLocalStorageInterface {
    value: string;
    setLocalStorageValue: (newValue: string) => void;
}
