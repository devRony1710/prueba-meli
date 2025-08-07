export interface UseLanguageButtonLogicInterface {
    language: string;
    isOpenLanguageOptions: boolean;
    handleLanguageChange: (lang: string) => void;
    setIsOpenLanguageOptions: React.Dispatch<React.SetStateAction<boolean>>;
}   